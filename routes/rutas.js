const express = require('express');
const {MongoClient}  = require('mongodb');
require("dotenv").config();
const base = process.env.MONGO_URI;


const router = express.Router()
const mongo = require("mongodb").MongoClient;


router.get("/ejercicio1", async(req, res) =>{
    try {
        
        const client = new MongoClient(base, {useNewUrlParser:true, useUnifiedTopology:true})
        await client.connect()
        const db = client.db('Microservicios')
        const colection = db.collection('usuario');

        const result = await colection.find().sort({"usu_nombre": 1}).toArray()

        res.json(result)

    } catch (error) {
        console.log(error);
    }
})



router.get("/ejercicio6", async (req, res) =>{
    try {
        
        const client = new MongoClient(base, {useNewUrlParser:true, useUnifiedTopology:true})
        await client.connect()
        const db = client.db('Microservicios')
        const colection = db.collection('cita');

        const result = await colection.find({"cit_fecha": {$eq: new Date("2023-01-21")}}).toArray()

        res.json(result)

        client.close()

    } catch (error) {
        console.log(error);
    }
})




module.exports = router