const CountryDetails = ({countryDetails}) => {
    const data = countryDetails[0]
    return (
        <div>
            <h2>{data.name.common}</h2>
            capital {data.capital}<br />
            area {data.area}
            <h3>languages</h3>
            <ul>
                {Object.values(data.languages).map(l => <li key={l}>{l}</li>)}
            </ul>
            <img src={data.flags.png} />
        </div>
    )
}

export default CountryDetails