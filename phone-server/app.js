const express = require('express');
const phones = require('./phones.json');
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('This is phone info server using nodemon.');
})

app.get('/phones', (req, res) => {
    // res.send("get phone api data from phones.json.");
    res.send(phones);
})

app.get('/phone/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log("get phone id from phones API: ", id)
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone);
})

app.listen(port, () => {
    console.log(`Listen phone server from port ${port}`);
})