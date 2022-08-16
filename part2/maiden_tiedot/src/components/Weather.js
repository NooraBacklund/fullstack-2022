import axios from "axios"
import { useEffect, useState } from "react"

const Weather = ({ city, coordinates }) => {
    const [lat, long] = coordinates
    const [weather, setWeather] = useState('loading')
    const apiKey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`)
            .then(response => {
                setWeather(response.data)
            })
    }, [])

    // only return once weather data has been fetched, otherwise bad things happen
    if (weather !== 'loading') {
        return (
            <div>
                <h3>Weather in {city}</h3>
                <p>Temperature {weather.main.temp} Celsius</p>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                <p>Wind {weather.wind.speed} m/s</p>
            </div>
        )
    }
}

export default Weather