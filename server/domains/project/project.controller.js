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

export default {
  addForm,
  showDashboard,
};
