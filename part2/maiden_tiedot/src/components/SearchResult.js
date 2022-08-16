import CountryDetails from "./CountryDetails"
import SearchResultLine from "./SearchResultLine"

const SearchResult = ({ countries, filter, setFilter }) => {
    // Determine number of matched countries
    const matchedCount =
        countries
            .map(country => country.name.common)
            .filter(c => c.toUpperCase().includes(filter.toUpperCase()))
            .length

    // Decide what to return
    // No matches
    if (matchedCount === 0) {
        return (<div>No results, please specify another filter.</div>)
    }
    // Exact match
    else if (matchedCount === 1) {
        const countryName = countries
            .map(country => country.name.common)
            .filter(c => c.toUpperCase().includes(filter.toUpperCase()))
        const countryDetails = countries.filter(c => c.name.common == countryName)[0]
        return (<CountryDetails countryDetails={countryDetails} />)
    }
    // Max 10 matches, but no exact match
    else if (matchedCount <= 10) {
        return (<div><ul>
            {countries
                .map(country => country.name.common)
                .filter(c => c.toUpperCase().includes(filter.toUpperCase()))
                .map(c => <SearchResultLine key={c} country={c} setFilter={setFilter} />)}
        </ul></div>)
    }
    // The remaining case (= over 10 matches)
    else {
        return (<div>Too many matches, specify another filter</div>)
    }
}

export default SearchResult