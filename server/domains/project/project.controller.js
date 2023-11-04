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
  res.status(200).json(req.body);
};

export default {
  addForm,
  showDashboard,
  addPost,
};
