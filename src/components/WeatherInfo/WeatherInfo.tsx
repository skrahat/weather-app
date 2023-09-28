import React from 'react';
import { WeatherInfoProps } from './type';

const WeatherInfo: React.FC<WeatherInfoProps> = ({ data }) => {
  return (
    <div className="weather-info">
      <div className="weather-info-item">
        <strong>Temperature:</strong> {data.temperature}°C
      </div>
      <div className="weather-info-item">
        <strong>Weather:</strong>
        <div className="weather-details">
          <p>
            <strong>Time (Local):</strong> {data.time.local}
          </p>
          <p>
            <strong>Time (UTC):</strong> {data.time.utc}
          </p>
          <p>
            <strong>Weather Code:</strong> {data.weatherCode.value}
          </p>
          <p>
            <strong>Dew Point:</strong> {data.dewPoint}
          </p>
          <p>
            <strong>Feels Like:</strong> {data.feelsLike}
          </p>
          <p>
            <strong>Wind:</strong> {data.wind.direction} at {data.wind.speed}{' '}
            km/h (Gust: {data.wind.gust} km/h)
          </p>
          <p>
            <strong>Relative Humidity:</strong> {data.relativeHumidity}%
          </p>
          <p>
            <strong>Pressure:</strong> {data.pressure.value} kPa (Trend:{' '}
            {data.pressure.trend})
          </p>
          <p>
            <strong>Visibility:</strong> {data.visibility} km
          </p>
          <p>
            <strong>Ceiling:</strong> {data.ceiling} m
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
