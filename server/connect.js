var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "malak"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "malak",
  database: "parc_auto_stock",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

db.on('error', (err) => {
  console.error('Database error:', err);
  if (err.fatal) {
    console.error('Fatal error:', err.message);
    // Reconnect logic or other handling
  }
});

app.post("/addUser", (req, res) => {
  const sql = "INSERT INTO users (`nom`, `prenom`, `email`, `password`) VALUES (?)";
  const values = [
    req.body.nom,
    req.body.prenom,
    req.body.email,
    req.body.password
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error('Query error:', err);
      return res.status(500).json({ error: err.message });
    }
    return res.json(data);
  });
});

const PORT = 3001;  // Assurez-vous que ce port est correct
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
