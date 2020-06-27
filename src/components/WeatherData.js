import React, {useContext} from "react"

import Context from "../Context"

const WeatherData = () => {

  const {weather, city} = useContext(Context)

  const {temp, humidity, pressure, description, icon} = weather

  const urlIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="weather-data">
  <p className="weather__tagline">Погода в <span className="weather-data__city">{city}</span></p>
  <div className="weather-data__box">
  <span className="weather-data__property">
    <p className="weather-data__title">{description}</p>
    <p className="weather-data__value"><img src={urlIcon} /></p>
  </span>
  </div>
  <div className="weather-data__box">
    <span className="weather-data__property">
      <p className="weather-data__title">Температура, °C</p>
      <p className="weather-data__value">{temp}</p>
    </span>
    <span className="weather-data__property">
      <p className="weather-data__title">Влажность, %</p>
      <p className="weather-data__value">{humidity}</p>
    </span>
    <span className="weather-data__property">
      <p className="weather-data__title">Давление, гПа</p>
      <p className="weather-data__value">{pressure}</p>
    </span>
  </div>
</div>
  )

}

export default WeatherData
