import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // Apply filter to person list
  const personsToShow = filter === '' 
  ? persons
  : persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))

  // New person addition
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    // Check if person already exists, only add new persons
    if (persons.map(person => person.name).includes(newName)) {
      // Alert of duplicate, do not add person
      alert(`${newName} is already added to phone book`)
    } else {
      // Add person to phonebook
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  // Event handlers
  const handleNameChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleFilterChange = (event) => setFilter(event.target.value)

  // Return page body
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with <input
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <h2>Add new person</h2>
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
      <h2>Numbers</h2>
      <div>
        {personsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
      </div>
    </div>
  )

}

export default App