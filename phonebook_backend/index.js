const { response } = require('express');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json())

// Morgan logging
morgan.token('body', function (req, res) { return JSON.stringify(req.body)})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
    {
        id: 1,
        name: "Arto Hellas", 
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>')
})

app.get('/info', (req, res) => {
    const response = 
        `<p>Phonebook has info for ${persons.length} people</p> \
        <p>${new Date().toString()}</p>`
    res.send(response)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.post('/api/persons', (req, res) => {
    const body = req.body;

    // Content missing
    if (!body) {
        return res.status(400).json({
            error: "Content missing"
        })
    }

    // Check for correct variables and no duplicate persons
    let errorList = []
    if (!body.name || body.name === "") {
        errorList = errorList.concat({error: "Name missing"});
    }
    if (!body.number || body.number === "") {
        errorList = errorList.concat({error: "Number missing"});
    }
    if (persons.find(person => person.name === body.name)) {
        errorList = errorList.concat({error: "Name must be unique"})
    }
    if (errorList.length) return res.status(400).json(errorList);

    const person = {
        id: Math.floor(Math.random() * 1000000),
        name: body.name,
        number: body.number
    }
    
    persons = persons.concat(person)

    res.json(person)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})