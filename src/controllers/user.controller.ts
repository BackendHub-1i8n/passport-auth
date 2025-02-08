import bcrypt from 'bcryptjs';
import { sequelize } from '../libs/mySql.sequelize';
import { Request, Response } from 'express';
import { generateToken } from '../libs/jwt';
import session from 'express-session';
import { UserService } from '../services/user.service';
import { use } from 'passport';

const userService = new UserService();

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await userService.create({ ...data, password: hash });

    const user = newUser.toJSON() as UserDto;

    if (!newUser) return void res.status(500).json({ message: 'Internal server error' });

    const payload = {
      sub: user.id as number,
      email: user.email as string,
      role: user.role as string,
    }

    const token = await generateToken(payload);
    res.cookie('token', token, { httpOnly: true });

    return void res.status(200).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    if (error instanceof Error) return void res.status(500).json({ message: error.message });
    return void res.status(500).json({ message: 'Internal server error' });
  }
};


export const findAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const reponse = await sequelize.models.User.findAll();
    return void res.status(200).json(reponse);
  } catch (error) {
    if (error instanceof Error) return void res.status(500).json({ message: error.message });
    return void res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userFind = await sequelize.models.User.findByPk(id);
    if (!userFind) return void res.status(200).json({ message: 'User not found' });

    await userFind.destroy();
    return void res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    if (error instanceof Error) return void res.status(500).json({ message: error.message });
    return void res.status(500).json({ message: 'Internal server error' });
  }
};

export interface UserDto {
  id: number,
  name: string,
  lastName: string,
  email: string,
  profile: {
    type: string,
    data: number[]
  },
  role: "admin" | "user",
  createdAt: string,
  updatedAt: string
}
declare module 'express-session' {
  interface SessionData {
    sessionId: string;
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const user = req.user as UserDto;

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const token = await generateToken(payload);
    res.cookie('token', token, { httpOnly: true, secure: false });

    console.log('Session ID:', req.sessionID); // Deberías ver el sessionId aquí
    console.log('Session Object:', req.session);

    res.json({ message: 'Login successfully' });

  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


export const profile = async (req: Request, res: Response) => {
  try {
    const user = req.user as UserDto;

    res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


export const logout = async (req: Request, res: Response) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({ message: 'Internal Server Error' });
      }
      res.clearCookie('token');
      res.clearCookie('sessionId')
      res.json({ message: 'Logout successfully' });
    })

  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
