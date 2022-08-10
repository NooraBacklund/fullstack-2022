const Person = ({ person }) => <p>{person.name} {person.number}</p>

const Persons = ({ persons, filter }) => {
    
    // Filter persons to be displayed
    const displayPersons = filter === ''
    ? persons
    : persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))

    // Build outgoing structure
    return (
        <div>
            {displayPersons.map(
                person => <Person person={person} key={person.name} />
            )}
        </div>
    )
}

export default Persons