var bookshelf = require('../db').bookshelf;

exports.Projects = bookshelf.Model.extend({
    tableName: 'projects'
});