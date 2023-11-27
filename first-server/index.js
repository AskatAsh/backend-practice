const express = require('express');
const app = express();

const port = 5000;
app.get('/', (req, res) => {
    res.send("hello from first server.");
})

app.get('/data', (req, res) => {
    res.send('Data from the first server in data path.');
})

app.listen(port, () => {
    console.log(`first server listening from port ${port}`);
})