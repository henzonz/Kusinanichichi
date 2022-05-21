const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const path = require('path');
const port = process.env.PORT || 3001;


const db = mysql.createConnection({
    // host: "localhost",
    // user: "root",
    // password: "password",
    // database: "KusinanichichiDataBase",
    host: "us-cdbr-east-05.cleardb.net",
    user: "b7a15ad9598b35",
    password: "072064f5",
    database: "heroku_9209a5d19fe2a2b",
});

// mysql://b7a15ad9598b35:072064f5@us-cdbr-east-05.cleardb.net/heroku_9209a5d19fe2a2b?reconnect=true
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
app.get("/snackmenu", (req, res) => {
    db.query("SELECT * FROM snacksmenu", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.get("/wingsmenu", (req, res) => {
    db.query("SELECT * FROM wingsmenu", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// if(process.env.NODE_ENV === "production") {
//     app.use(express.static('build'));
//     app.get('*', (req, res) => {
//         req.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//     })
// }
app.listen(port, () => {
    console.log("running on port:", port);
});