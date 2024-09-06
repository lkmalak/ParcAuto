const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


{/* Connection to database */}

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "malak",
  database: "parc_auto_stock",
});

{/* Login */}

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE email= ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json("errors");
    return res.json(data.length > 0 ? "success" : "errors");
  });
});

{/* Add user */}

app.post("/addUser", (req, res) => {
  const sql = "INSERT INTO users (nom, prenom, email, password) VALUES (?)";
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

{/* Geting Users */}

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json("errors");
    return res.json(data);
  });
});

{/* Rapport */}

app.post("/layout/Rapports", (req, res) => {
  const sql = "INSERT INTO rapport_veh (type, date_gener, contenu, format) VALUES (?)";
  const values = [
    req.body.type,
    req.body.date_gener,
    req.body.contenu,
    req.body.format,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/layout/Rapports", (req, res) => {
  const sql = "SELECT * FROM rapport_veh";
  db.query(sql, (err, data) => {
    if (err) return res.json("errors");
    return res.json(data);
  });
});

{/* Reparation */}
app.post("/layout/Reparation", (req, res) => {
  const sql = "INSERT INTO reparation_veh (type, date_reparation, cout, fornisseur,facture,id_vehicule) VALUES (?)";
  const values = [
    req.body.type,
    req.body.date_reparation,
    req.body.cout,
    req.body.fornisseur,
    req.body.facture,
    req.body.id_vehicule,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("SQL Error:", err);
      return res.status(500).json({ error: "Database error occurred." });
    }
    
    return res.json(data);
  });
});


app.get("/layout/Reparation", (req, res) => {
  const sql = "SELECT * FROM reparation_veh";
  db.query(sql, (err, data) => {
    if (err) return res.json("errors");
    return res.json(data);
  });
});

app.listen(3001, () => {
  console.log("server data is running correctly");
});
