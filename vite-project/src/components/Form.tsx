import { useState } from "react";

const Form = () => {

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    const [city, setCity] = useState<string>("");

    const getWeather = (e: any) => {
        e.preventDefault();
        fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`)
            .then(res => res.json())
            .then(data => console.log(data))
    }

        return (
            <form>
                <input type="text" name="city" placeholder="都市名" onChange={(e) => setCity(e.target.value)} />
                <button type="submit" onClick={getWeather}>Get Weather</button>
            </form>
        )
    }

    export default Form