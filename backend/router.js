const express = require('express');
const ProjectsController = require('./controllers/projects.js');
      // AuthentificationController = require('./controllers/authentification');

module.exports = function(app) {
    const apiRoutes = express.Router();

    apiRoutes.get('/api/projects', ProjectsController.getProjects);
    // apiRoutes.post('/artPiece', AuthentificationController.validAuthentificationMiddleWare , ArtPieceController.updateArtPiece);
    // apiRoutes.post('/password', AuthentificationController.validAuthentification);

    app.use(apiRoutes);
};