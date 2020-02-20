let sequelize = require('./configdb/config.js');
let Sequelize = require('sequelize');
let createdb= require('./models/user.js');
let express= require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/user',function(req,res){
    console.log("req.body",req.body);
    sequelize.authenticate().then(()=>{
        console.log("Connected")
        console.log("req.body",req.body);
        createdb(sequelize,Sequelize).sync().then(()=>{
            console.log("DB created");
           return createdb(sequelize,Sequelize).create({
                name: req.body.name
                });
        }).then((result)=>{
            console.log("Res",result);
            res.send(result);
        });
    }).catch((err)=>{
        console.log("Sorry",err);
    });
});

app.get('/user/:name',function(req,res){
    console.log("req.body",req.query);
    sequelize.authenticate().then(()=>{
        console.log("Connected")
        console.log("req.params",req.params);
        return createdb(sequelize,Sequelize).findOne({
            where: {
                name: 
                    req.params.name
                
            }
           }).then((result)=>{
            console.log("Res",result);
            res.send(result);   
        })
        .catch((err)=>{
        console.log("Sorry",err);
    });
});

});
app.get('/user',function(req,res){
    sequelize.authenticate().then(()=>{
        console.log("Connected")
        return createdb(sequelize,Sequelize).findAll({
            
           }).then((result)=>{
            console.log("Res",result);
            res.send(result);   
        })
        .catch((err)=>{
        console.log("Sorry",err);
    });
});

});


app.listen(3000,()=>{
    console.log("Listening on port 3000");
})
