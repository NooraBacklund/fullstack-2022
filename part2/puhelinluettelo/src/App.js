import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Message from './components/Message'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  // Helper function for showing a brief message
  const showMessage = (msg, msgType) => {
    const newMsg = { type: msgType, text: msg}
    setMessage(newMsg)
    setTimeout(() => setMessage(null), 5000)
  }

  // Get persons on initial load
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message} />
      <Filter
        filter={filter}
        setFilter={setFilter} />

      <h2>Add new person</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        showMessage={showMessage} />

      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filter={filter}
        setPersons={setPersons}
        showMessage={showMessage} />
    </div>
  )

}

export default App