// Importando la funcionalidad de log
import log from '../../config/winston';
// Importando el modelo usuario
import User from './user.model';

// Action Methods

// GET /user/login
const login = (req, res) => {
  // Loggear la solicitud
  log.info('Se entrega formulario de login');
  // Servir la vista de login
  res.render('user/login');
};

// GET "/user/logout"
const logout = (req, res) => {
  res.send('⚠️ UNDER CONSTRUCTION: GET /user/logout ⚠️');
};

// GET "/user/register"
const register = (req, res) => {
  log.info('Se entrega formulario de registro');
  res.render('user/register');
};

// POST '/user/register'
const registerPost = async (req, res) => {
  log.info('Se recibe informacion del formulario de registro');
  const { validData: userFormData, errorData } = req;
  // Verificar si hay errores
  if (errorData) {
    return res.json(errorData);
  }
  try {
    // Crear un nuevo usuario
    const user = await User.create(userFormData);
    log.info(`Usuario creado exitosamente: ${JSON.stringify(user)}`);
    // Se le contesta al cliente
    return res.status(200).json(user.toJSON());
  } catch (error) {
    log.error(`Error al crear el usuario: ${error.message}`);
    return res.status(500).json({
      message: error.message,
      name: error.name,
      errors: error.errors,
    });
  }
};

export default { login, logout, register, registerPost };
