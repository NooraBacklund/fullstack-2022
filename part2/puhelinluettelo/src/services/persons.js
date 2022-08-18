import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl)

const addPerson = (newPerson) => axios.post(baseUrl, newPerson)

const deletePerson = (id) => axios.delete(`${baseUrl}/${id}`)

const updatePerson = (person) => axios.put(`${baseUrl}/${person.id}`, person)

export default { getAll, addPerson, deletePerson, updatePerson }