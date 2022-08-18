import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl)

const addPerson = (newPerson) => axios.post(baseUrl, newPerson)

const deletePerson = (id) => axios.delete(`${baseUrl}/${id}`)

export default { getAll, addPerson, deletePerson }