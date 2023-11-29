const express = require("express");
const cors = require("cors");
const app = express();


const port = process.env.PORT || 5000;

const users = [
    {id: 1, name: "Arman", email: "arman@gmail.com"},
    {id: 1, name: "Sakib", email: "sakib@gmail.com"},
    {id: 1, name: "Jamil", email: "jamil@gmail.com"},
]

app.use(cors());

app.get('/users', (req, res) => {
    res.send(users);
})

app.get('/', (req, res) => {
    res.send("User Management Server is running.");
})

app.listen(port, () => {
    console.log(`Running user management server using port: ${port}`);
})