import Weather from "./Weather"

const CountryDetails = ({countryDetails}) => {
    return (
        <div>
            <h2>{countryDetails.name.common}</h2>
            capital {countryDetails.capital}<br />
            area {countryDetails.area}
            <h3>languages</h3>
            <ul>
                {Object.values(countryDetails.languages).map(l => <li key={l}>{l}</li>)}
            </ul>
            <img src={countryDetails.flags.png} />
            <Weather city={countryDetails.capital} coordinates={countryDetails.capitalInfo.latlng} />
        </div>
    )
}

export default CountryDetails