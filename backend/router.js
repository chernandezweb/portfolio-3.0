// const express = require('express'),
//       ArtPieceController = require('./controllers/artPiece'),
//       AuthentificationController = require('./controllers/authentification');
//
// module.exports = function(app) {
//     const apiRoutes = express.Router();
//
//     apiRoutes.get('/artPiece', AuthentificationController.validAuthentificationMiddleWare, ArtPieceController.getArtPieces);
//     apiRoutes.post('/artPiece', AuthentificationController.validAuthentificationMiddleWare , ArtPieceController.updateArtPiece);
//     apiRoutes.post('/password', AuthentificationController.validAuthentification);
//
//     app.use(apiRoutes);
// };