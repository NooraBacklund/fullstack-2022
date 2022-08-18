import personService from '../services/persons'

const Person = ({ person, setPersons, persons }) => {

    const handlePersonDelete = (event) => {
        if (window.confirm(`Are you sure you want to delete the entry?`)) {
            personService
                .deletePerson(event.target.value)
                .then((response) => {
                    setPersons(persons.filter(p => p.id != event.target.value))
                })
                .catch(error => {
                    console.log('Could not find person to be deleted')
                })
        }
    }

    return (
        <p>
            {person.name} {person.number} <button onClick={handlePersonDelete} value={person.id} >delete</button>
        </p>
    )
}

const Persons = ({ persons, filter, setPersons }) => {

    // Filter persons to be displayed
    const displayPersons = filter === ''
        ? persons
        : persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))

    // Build outgoing structure
    return (
        <div>
            {displayPersons.map(
                person => <Person person={person} setPersons={setPersons} persons={persons} key={person.name} />
            )}
        </div>
    )
}

export default Persons