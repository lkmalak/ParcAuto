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
    "INSERT INTO users (`nom`,`email` , `password`,`role`) VALUES (?)";
  const values = [
    req.body.nom,
    req.body.email,
    req.body.password,
    req.body.role,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

//app.get("/",(req,res) => {
//  const sql =""
//})

app.listen(8081, () => {
  console.log("server data");
});
