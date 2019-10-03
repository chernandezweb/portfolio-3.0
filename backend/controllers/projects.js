// var Projects = require('../models/projects').Projects;
// var async = require('async');
// var errorBuilder = require('../utils/errorBuilder');
//
// exports.getProjects = function(req,res,next){
//     async.waterfall([
//         function(done){
//             new Projects()
//                 .fetchAll()
//                 .then(function(project_name){
//                     done(null, project_name);
//                 })
//                 .catch(function(err){
//                     done(errorBuilder.createError(err, 404));
//                 })
//         }
//     ], function(err, data){
//         if(err) return next(err);
//
//         return res.status(200)
//             .json({
//                 status: 200,
//                 data: data
//             });
//     });
// };




