import { useState } from "react";
import Title from "./components/Title"
import Form from "./components/Form"
import Result from "./components/Result"

const App = () => {

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const [city, setCity] = useState<string>("");

  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <div>
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result />
    </div>
  )
}

export default App