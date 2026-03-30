import { useState } from "react";
import Title from "./components/Title"
import Form from "./components/Form"
import Result from "./components/Result"
import Loading from "./components/Loading";

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

  const [loading, setLoading] = useState<boolean>(false);

  const getWeather = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {setResult({
        country: data.location.country,
        cityName: data.location.name,
        templature: data.current.temp_c,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon
      })
      setLoading(false);
    })
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} />
        {loading ? <Loading /> : <Result result={result} />}
      </div>
    </div>
  )
}

export default App