import log from '../../config/winston';

// Action Methods

// GET '/project/addForm'
// GET '/project/add'
const addForm = (req, res) => {
  res.render('project/addView');
};

// GET '/project/showDashboard'
// GET '/project/projects'
// GET '/project'
const showDashboard = (req, res) => {
  res.send("🚧 UNDER CONSTRUCTION GET  '/project/showDashboard' 🚧");
};

// POST "/project/add"
const addPost = (req, res) => {
  // Rescatando la info del formulario
  const { errorData: validationError } = req;
  // En caso de haber error
  // se le informa al cliente
  if (validationError) {
    log.info('Se entrega al cliente error de validación de add Project');
    res.status(422).json(validationError);
  } else {
    // En caso de que pase la validación
    // Se desestructura la información
    // de la peticion
    const { validData: project } = req;
    // Se contesta la información
    // del proyecto al cliente
    res.status(200).json(project);
  }
};

export default {
  addForm,
  showDashboard,
  addPost,
};
