import { useState } from "react";
import Title from "./components/Title"
import Form from "./components/Form"
import Result from "./components/Result"

const App = () => {

  type ResultState = {
    country: string,
    cityName: string,
    templature: string,
    conditionText: string,
    icon: string
  }

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const [city, setCity] = useState<string>("");

  const [result, setResult] = useState<ResultState>({
    country: "",
    cityName: "",
    templature: "",
    conditionText: "",
    icon: ""
  });

  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => setResult({
        country: data.location.country,
        cityName: data.location.name,
        templature: data.current.temp_c,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon
      }))
  }

  return (
    <div>
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result result={result} />
    </div>
  )
}

export default App