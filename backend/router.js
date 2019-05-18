const express = require('express');
const ProjectsController = require('./controllers/projects.js');
      // AuthentificationController = require('./controllers/authentification');

module.exports = function(app) {
    const apiRoutes = express.Router();
    apiRoutes.get('/api/projects', ProjectsController.getProjects);
    app.use(apiRoutes);
};