const express = require("express")
const app = express()
const mysql= require("mysql")
const cors = require("cors")
const bodyParser = require("body-parser");

app.use(cors())
app .use(bodyParser.json());
 
app.listen(3000, () => {
    console.log("A szerver a 3000 porton fut");
}); 
const db = mysql.createConnection(
    {      
     user:"root",
    host:"localhost",
    port: 3307,
    password:"",
    database:"teliolimpia",
    }
);
//a szerver futásának az ellenőrzése

app.get("/", (req, res) => {
    res.send("Fut a backend!");
})
 