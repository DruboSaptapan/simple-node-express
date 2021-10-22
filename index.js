const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const cors = require('cors');
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, I\'m from second node. I\m so excited to learn nodemon with express automatic restart.')
});

const users = [
    { id: 0, name: 'Salman', email: 'salmanshah@gmail.com' },
    { id: 1, name: 'Rakib', email: 'rakib@gmail.com' },
    { id: 2, name: 'Opu', email: 'opu@gmail.com' },
    { id: 3, name: 'Emon', email: 'emon@gmail.com' },
    { id: 4, name: 'Rimon', email: 'rimon@gmail.com' },
    { id: 5, name: 'Limon', email: 'limon@gmail.com' },
    { id: 6, name: 'Noman', email: 'noman@gmail.com' },
    { id: 7, name: 'Shaon', email: 'shaon@gmail.com' },
    { id: 8, name: 'Tutul', email: 'tutul@yahoo.com' },
    { id: 9, name: 'Antu', email: 'antu@hotmail.com' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

});

/* app.method */
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
});




/* dynamic api */
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user);
    // console.log(req.params.id)
})

app.get('/beasts/tiger', (req, res) => {
    res.send('Tiger is the national beast of the country.')
})

app.get('/fruits', (req, res) => {
    res.send(['Mango', 'Orange', 'Lemon', 'Lychee', 'Jack Furit'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy! fazli aam khub mishti.')
})

app.listen(port, () => {
    console.log('I\'m listening port', port);
})