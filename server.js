const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const bodyParser = require("body-parser");

app.use(cors())
app.use(bodyParser.json());

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        port: 3307,
        password: "",
        database: "teliolimpia",
    }
);
//a szerver futásának az ellenőrzése

app.get("/", (req, res) => {
    res.send("Fut a backend!");
})

app.get("/v", (req, res) => {
    const sql = "SELECT * FROM `versenyzok`";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})

app.get("/v3", (req, res) => {
    const sql = "SELECT * FROM `versenyzok` where ID = 3";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})

app.listen(3000, () => {
    console.log("A szerver a 3000 porton fut");
}); 