import bcrypt from 'bcryptjs';
import { sequelize } from '../libs/mySql.sequelize.js';

export const createUser = async (req, res) => {
  try {
    const data = req.body;
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await sequelize.models.User.create({
      ...data,
      password: hash, //* encripta la contraceña
    });
    return res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const findAll = async (req, res) => {
  try {
    const reponse = await sequelize.models.User.findAll();
    return res.status(200).json(reponse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userFind = await sequelize.models.User.findByPk(id);
    if (!userFind) return res.status(200).json({ message: 'User not found' });

    await userFind.destroy();
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
