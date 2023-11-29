const express = require("express");
const cors = require("cors");
const app = express();


const port = process.env.PORT || 5000;

const users = [
    {id: 1, name: "Arman", email: "arman@gmail.com"},
    {id: 2, name: "Sakib", email: "sakib@gmail.com"},
    {id: 3, name: "Jamil", email: "jamil@gmail.com"},
]

app.use(cors());
app.use(express.json());

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log("the post request is hitting.");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.get('/', (req, res) => {
    res.send("User Management Server is running.");
})

app.listen(port, () => {
    console.log(`Running user management server using port: ${port}`);
})