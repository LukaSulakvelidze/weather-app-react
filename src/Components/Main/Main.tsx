import {
  cloudy_icon,
  humadity_icon,
  temp_max_icon,
  temp_min_icon,
  wind_icon,
} from "../../exports";
import { Weather_Detail, Image_Components } from "../../exports";

interface Main_Props {
  weather_data: any;
}

const Main = ({ weather_data }: Main_Props) => {
  return (
    <main>
      <div className="weather_info_cont">
        <h2 className="celsius">
          {weather_data.current_temp
            ? `${weather_data.current_temp + "°"}`
            : "16°"}
        </h2>

        <div className="city_time_cont">
          <h1 className="city_name">
            {weather_data.city ? weather_data.city : "London"}
          </h1>
          <span className="current_time">
            {weather_data.current_time
              ? weather_data.current_time
              : "06:09 - Monday, 9 Sep ‘23"}
          </span>
        </div>
        <Image_Components
          className="weather_icon"
          src={
            weather_data.current_weather_icon
              ? weather_data.current_weather_icon
              : cloudy_icon
          }
          alt="Weather Icon"
        />
      </div>

      <div className="blur_contaier">
        <div className="blur_contaier_child_div">
          <span> Weather Details... </span>
          <div className="weather_detail_cont">
            <span className="weather_condition">
              {weather_data.current_weather
                ? weather_data.current_weather
                : "thunderstorm with light drizzle"}
            </span>
            <Weather_Detail
              parameter_span="Temp Max"
              weather_data={
                weather_data.temp_max
                  ? `${weather_data.temp_max + "°C"}`
                  : "19°C"
              }
              image_src={temp_max_icon}
            />

            <Weather_Detail
              parameter_span="Temp min"
              weather_data={
                weather_data.temp_min
                  ? `${weather_data.temp_min + "°C"}`
                  : "15°C"
              }
              image_src={temp_min_icon}
            />

            <Weather_Detail
              parameter_span="Humadity"
              weather_data={
                weather_data.humadity ? `${weather_data.humadity + "&"}` : "58%"
              }
              image_src={humadity_icon}
            />

            <Weather_Detail
              parameter_span="Cloudy"
              weather_data={
                weather_data.cloudy ? `${weather_data.cloudy + "%"}` : "86%"
              }
              image_className="detail_icon"
              image_src={cloudy_icon}
            />

            <Weather_Detail
              parameter_span="Wind"
              weather_data={
                weather_data.wind_speed
                  ? `${weather_data.wind_speed + "km/h"}`
                  : "5km/h"
              }
              image_src={wind_icon}
            />
          </div>
        </div>
        <hr></hr>
      </div>
    </main>
  );
};

export default Main;
