const ProjectController = require("../controllers/project.controller");

module.exports = (app) => {
    app.post("/api/Projects", ProjectController.createProject)
};