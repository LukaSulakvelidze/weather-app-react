import axios from "axios";
import { useEffect, useState } from "react";
import { Header, Main } from "../exports";
import { WeatherData_Props } from "../types";

const Landing_Page = () => {
  const [input_value, setInputValue] = useState("");
  const [weather_data, setWeatherData] = useState({});
  const [bodyClass, setBodyClass] = useState("");

  const get_weather_data_on_enter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      get_weather_data();
    }
  };
  const get_weather_data = () => {
    const get_data = async () => {
      let response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=196cbe371f1c40f9ba3113741241402&q=${input_value}&days=7&aqi=yes&alerts=no`
      );
      const weather_through_info: WeatherData_Props = {
        city: response.data.location.name,
        current_temp: response.data.current.temp_c,
        current_weather_icon: response.data.current.condition.icon,
        current_weather: response.data.current.condition.text,
        current_time: response.data.location.localtime,
        temp_max: response.data.forecast.forecastday[0].day.maxtemp_c,
        temp_min: response.data.forecast.forecastday[0].day.mintemp_c,
        humadity: response.data.current.humidity,
        cloudy: response.data.current.cloud,
        wind_speed: response.data.current.wind_kph,
      };
      setWeatherData(weather_through_info);
      if (
        weather_through_info.current_weather == "Light Rain" ||
        weather_through_info.current_weather == "Patchy rain nearby"
      ) {
        changeBodyClass("body_drizzle");
      } else if (weather_through_info.current_weather == "Moderate rain") {
        changeBodyClass("body_rain");
      } else if (weather_through_info.current_weather == "Partly cloudy") {
        changeBodyClass("body_cloudy_sun");
      } else if (
        weather_through_info.current_weather == "Cloudy" ||
        weather_through_info.current_weather == "Overcast"
      ) {
        changeBodyClass("body_cloudy");
      } else if (weather_through_info.current_weather == "Sunny") {
        changeBodyClass("body_sunny");
      }
    };
    get_data();
    setInputValue("");
  };

  const changeBodyClass = (newClass: string) => {
    setBodyClass(newClass);
  };

  useEffect(() => {
    try {
      get_weather_data();
      document.body.className = bodyClass;
    } catch (error) {
      alert("API IS NOT FUNCTIONING");
    }
  }, [bodyClass]);

  return (
    <>
      <Header
        value={input_value}
        input_onChange={(e) => setInputValue(e.target.value)}
        input_onKeyDown={(e) => get_weather_data_on_enter(e)}
        magnifer_icon_onClick={() => get_weather_data()}
      />
      <Main weather_data={weather_data && weather_data} />
    </>
  );
};

export default Landing_Page;
