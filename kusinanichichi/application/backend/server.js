const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "KusinanichichiDataBase",
});
app.use(cors());
app.use(express.json());

app.get("/silogmenu", (req, res) => {
    db.query("SELECT * FROM silogmenu", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.get("/drinkmenu", (req, res) => {
    db.query("SELECT * FROM drinksmenu", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});