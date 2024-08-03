const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "parc_auto_stock",
});

app.post("/addUser", (req, res) => {
  const sql =
    "INSERT INTO users (nom, prenom, email, password) VALUES ?";
  const values = [
    req.body.nom,
    req.body.prenom,
    req.body.email,
    req.body.password,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });

});

app.listen(3001, () => {
  console.log("server data");
});
