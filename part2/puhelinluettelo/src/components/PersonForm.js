import { useState } from 'react'
import personService from '../services/persons'

const PersonForm = ({ persons, setPersons }) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => setNewName(event.target.value)
    const handleNumberChange = (event) => setNewNumber(event.target.value)

    const addPerson = (event) => {
        event.preventDefault()
        // Note use of "let" instead of "const", to allow for enrichment with id if this is an existing person
        let newPerson = {
            name: newName,
            number: newNumber
        }

        // Check if person already exists, only add new persons
        if (persons.map(person => person.name).includes(newName)) {
            // Alert of duplicate, do not add person
            if (window.confirm(`${newName} is already added to phone book, replace the old number with a new one?`)) {
                // Get person ID
                const id = persons.filter(p => p.name === newName)[0].id
                // Replace number
                newPerson = { ...newPerson, id: id }
                personService
                    .updatePerson(newPerson)
                    .then(response => {
                        setPersons(persons.map(p => p.id !== newPerson.id ? p : response.data))
                    })
            }
        } else {
            // Add person to phonebook
            personService
                .addPerson(newPerson)
                .then(response => {
                    setPersons(persons.concat(response.data))
                    setNewName('')
                    setNewNumber('')
                })
        }
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input
                    value={newName}
                    onChange={handleNameChange}
                /><br />
                number: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm