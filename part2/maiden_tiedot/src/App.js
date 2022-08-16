import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResult";

function App() {
  // Country list
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  // Get country list from API on component first render
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <SearchForm setFilter={setFilter} />
      <SearchResults countries={countries} filter={filter} />
    </div>
  )
}

export default App;
