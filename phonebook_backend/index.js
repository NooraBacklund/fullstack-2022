const express = require('express');
const app = express();

let notes = [
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
        `<p>Phonebook has info for ${notes.length} people</p> \
        <p>${new Date().toString()}</p>`
    res.send(response)
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find(note => note.id === id)
    if (note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})