const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require ('cors');

const app = express();
app.use(express.json());
app.use(cors());

const Db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "malak",
    database : "parc_auto_stock"
})

app.post('/addUser',(req,res) => {
    const sql = "INSERT INTO users (`nom`,`email` , `password`,`role`) VALUES (?)";
    const values = [
        req.body.nom,
        req.body.email,
        req.body.password,
        req.body.role,
    ]
    Db.query(sql, [values], (err,data) => {
        if(err){
            return res.json("Error")
        }
        return res.json(data);
   })
})

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'najat', // Replace with your password
  database: 'parc_auto_stock'
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.stack);
    return;
  }
  console.log('Connected to database with ID', connection.threadId);
});

// Register endpoint
app.post('/register', async (req, res) => {
  const { email, password, nom, prenom, role, telephone } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  connection.query(
    'INSERT INTO users (email, password, nom, prenom, role, telephone) VALUES (?, ?, ?, ?, ?, ?)',
    [email, hashedPassword, nom, prenom, role, telephone],
    (err, results) => {
      if (err) {
        return res.status(500).send('Error registering user');
      }
      res.status(201).send('User registered successfully');
    }
  );
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  connection.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) {
      return res.status(500).send('Error fetching user');
    }

    if (results.length === 0) {
      return res.status(401).send('User not found');
    }

    const user = results[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid password');
    }

    const token = jwt.sign({ id: user.id_user }, 'secretkey', { expiresIn: '1h' });
    res.json({ token, user });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
