const express = require('express'),
      ProjectsController = require('./controllers/projects.js');
      // AuthentificationController = require('./controllers/authentification');

module.exports = function(app) {
    const apiRoutes = express.Router();

    apiRoutes.get('/projects', ProjectsController.getProjects);
    // apiRoutes.post('/artPiece', AuthentificationController.validAuthentificationMiddleWare , ArtPieceController.updateArtPiece);
    // apiRoutes.post('/password', AuthentificationController.validAuthentification);

    app.use(apiRoutes);
};