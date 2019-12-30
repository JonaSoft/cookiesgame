/*jshint esversion: 8 */
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

process.env.PORT = process.env.PORT || 3000;

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.listen(process.env.PORT, async() => {
    console.log('Escuchando en el puerto: ', process.env.PORT);
});