const SearchForm = ({setFilter}) => {
    const onFilterChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            Find countries <input onChange={onFilterChange} />
        </div>
    )
}

export default SearchForm