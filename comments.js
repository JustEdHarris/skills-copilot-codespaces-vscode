// Create web server

// Import express
const express = require('express');
// Import body parser
const bodyParser = require('body-parser');
// Import database
const db = require('./database');
// Import cors
const cors = require('cors');
// Import path
const path = require('path');

// Create express app
const app = express();
// Set port
const port = 3000;

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Use cors
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Create route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Create route for get all comments
app.get('/comments', (req, res) => {
    let sql = 'SELECT * FROM comments';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Create route for get single comment
app.get('/comments/:id', (req, res) => {
    let sql = `SELECT * FROM comments WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Create route for create comment
app.post('/comments', (req, res) => {
    let data = {name: req.body.name, comment: req.body.comment};
    let sql = 'INSERT INTO comments SET ?';
    db.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Create route for update comment
app.put('/comments/:id', (req, res) => {
    let sql = `UPDATE comments SET name = '${req.body.name}', comment = '${req.body.comment}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Create route for delete comment
app.delete('/comments/:id', (req, res) => {
    let sql = `DELETE FROM comments WHERE id = ${req.params.id}`;
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Create route for delete all comments
app