const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.json())

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
    // Verify that data contains correct info
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            error: "Content missing"
        })
    }

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