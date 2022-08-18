const SearchResultLine = ({country, setFilter}) => {
    const setFilterHandler = (event) => {
        event.preventDefault()
        setFilter(event.target.value)
    }

    return(
        <li>{country} <button onClick={setFilterHandler} value={country}>Show</button></li>
    )
}

export default SearchResultLine