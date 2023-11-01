'use strict'

const express = require('express');
const app = express();
const mysqlPool = require('./mysqlpool');
const utils = require('./utils');

//Express middleware
app.use(express.json());

app.post('/competitor', async (req,res) => {

    try {

        if(!req.body.surname || !req.body.name) res.status(400).json({error:400,message:'Invalid Request'});

        let sqlQuery = `INSERT INTO competitor (surname,name) VALUES ('${req.body.surname}','${req.body.name}')`

        let dbResults = await utils.executeQuery(mysqlPool,sqlQuery);

        console.log('dbResults ===> ',dbResults);

        res.json({success:req.body.surname});
        
    } catch (error) {
        
        console.log('main Error ===> ',error);

        res.status(400).json(error);
    }
    
});

//App listening
app.listen(80,()=>{
    console.log('app listening at 80')
});