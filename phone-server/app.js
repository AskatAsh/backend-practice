const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('This is phone info server using nodemon.');
})

app.listen(port, () => {
    console.log(`Listen phone server from port ${port}`);
})