import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Thalia Garcia',
    email: 'thalia@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Marcus Garcia',
    email: 'marcus@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;