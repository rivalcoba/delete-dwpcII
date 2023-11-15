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
    // Se desestructuran los datos de validación
    // y se renombran de  "value" a "project"
    const { value: project } = validationError;
    // Se extraen los campos que fallaron en la validación
    const errorModel = validationError.inner.reduce((prev, curr) => {
      // Creando una variable temporal para
      // evitar el error "no-param-reassing"
      const workingPrev = prev;
      workingPrev[`${curr.path}`] = curr.message;
      return workingPrev;
    }, {});
    res.status(422).json({ project, errorModel });
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
