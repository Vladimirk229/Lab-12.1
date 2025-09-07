const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});
