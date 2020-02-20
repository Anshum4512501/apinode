// let pg= require('pg');
// let {Client} = pg;
//  module.exports = new Client({
//     user:"testuser",
//     password:"testuser",
//     host:"localhost",
//     database:"testdb",
//     port:5432
// });
let Sequelize = require('sequelize');
let sequelize = new Sequelize('testdb','testuser','testuser',
{
   dialect:'postgres'
}
);
module.exports=sequelize