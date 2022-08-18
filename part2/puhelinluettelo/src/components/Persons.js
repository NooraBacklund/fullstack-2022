import personService from '../services/persons'

const Person = ({ person, setPersons, persons, showMessage }) => {

    const handlePersonDelete = (event) => {
        if (window.confirm(`Are you sure you want to delete entry for ${person.name}?`)) {
            personService
                .deletePerson(event.target.value)
                .then(response => showMessage(`${person.name} deleted from phonebook.`, 'success'))
                .catch(error => showMessage(`${person.name}'s information is no longer in the phonebook and cannot be deleted.`, 'error'))
                .finally(
                    setPersons(persons.filter(p => p.id != event.target.value))
                )
        }
    }

    return (
        <p>
            {person.name} {person.number} <button onClick={handlePersonDelete} value={person.id} >delete</button>
        </p>
    )
}

const Persons = ({ persons, filter, setPersons, showMessage }) => {

    // Filter persons to be displayed
    const displayPersons = filter === ''
        ? persons
        : persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))

    // Build outgoing structure
    return (
        <div>
            {displayPersons.map(
                person =>
                    <Person
                        person={person}
                        setPersons={setPersons}
                        persons={persons}
                        showMessage={showMessage}
                        key={person.name} />
            )}
        </div>
    )
}

export default Persons