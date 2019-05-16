var knex = require('knex')({
    client: 'pg',
    connection: {
        host     : 'ec2-54-243-197-120.compute-1.amazonaws.com',
        database : 'd7f5eltml40912',
        user     : 'tjlgodskzcyims',
        password : '13930cea5ec33268a01c70fdfdaceeb5f2c8041dd7337a7f8ea19f2f82501d8d',
        charset  : 'utf8',
        ssl: true
    },
    pool: { min: 1, max: 5 }
});

exports.knex = knex;
exports.bookshelf = require('bookshelf')(knex);