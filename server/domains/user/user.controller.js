import log from '../../config/winston';
import User from './user.model';
// Action Methods

// GET '/user/login'
const login = (req, res) => {
  // Sirve el formulario de login
  log.info('Se entrega formulario de login');
  res.render('user/login');
};

// GET '/user/logout'
const logout = (req, res) => {
  res.send("🚧 UNDER CONSTRUCTION GET  '/user/logout' 🚧");
};

// GET '/user/register'
const register = (req, res) => {
  log.info('Se entrega formulario de registro');
  res.render('user/register');
};

// 20231124084021
// http://127.0.0.1:5000/user/register

{
  "id": "6560b5d4f65d2a10ef3bab5f",
  "firstName": "w",
  "lastname": "ww",
  "mail": "w@gmail.com",
  "createdAt": "2023-11-24T14:40:20.093Z",
  "updatedAt": "2023-11-24T14:40:20.093Z"

export default {
  login,
  logout,
  register,
  registerPost,
};
