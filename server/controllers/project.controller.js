const Project = require("../models/project.model");

module.exports = {
    createProject: (req, res) => {
        Project.create(req.body)
            .then((newProject) => res.json(newProject))
            .catch((err) => console.log("createProject has failed"));
    }
}