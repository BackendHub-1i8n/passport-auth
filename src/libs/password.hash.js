import bcrypt from 'bcryptjs';

const encrypt = async (password) => {
  //* encripta la contraceña
  const hash = await bcrypt.hash(password, 10);
  //* compara la contraceña encriptada con la contraceña que se envia por el body
  const isMatch = await bcrypt.compare(password, hash);
  console.log(isMatch);
  // return hash;
};

const pass = '123456';

encrypt(pass);
