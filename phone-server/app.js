const express = require('express');
const phones = require('./phones.json');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('This is phone info server using nodemon.');
})

app.get('/phones', (req, res) => {
    // res.send("get phone api data from phones.json.");
    res.send(phones);
})

app.listen(port, () => {
    console.log(`Listen phone server from port ${port}`);
})