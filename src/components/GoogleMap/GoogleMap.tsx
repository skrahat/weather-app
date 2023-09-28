import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

import { fetchWeatherData } from '../../api/getWeatherData';
import './GoogleMap.css';
import { canadianCities, center } from '../../constant/data';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

export const GoogleMapsComponent: React.FC = () => {
  const apiKey = process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<any | null>(null);
  const [cityMarkers, setCityMarkers] = useState<
    { lat: number; lng: number }[]
  >([]);

  const fetchDataAndInitializeMarkers = async () => {
    try {
      const weatherDataPromises = canadianCities.map(async (city) => {
        const response = await fetchWeatherData(city.lat, city.lng);
        return response?.data ? { ...city, data: response.data } : null;
      });

      const results = await Promise.all(weatherDataPromises);
      const filteredResults = results.filter(Boolean) as {
        name: string;
        lat: number;
        lng: number;
        data: any;
      }[];

      setWeatherData(filteredResults);
      setCityMarkers(
        filteredResults.map((city) => ({ lat: city.lat, lng: city.lng }))
      );
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    // Fetch weather data for cities and initialize city markers
    fetchDataAndInitializeMarkers();
  }, []);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      {cityMarkers.length > 0 && (
        <div>
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={4}
          >
            {cityMarkers.map((marker, index) => (
              <Marker
                key={index}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => setSelectedMarker(cityMarkers[index])}
              >
                {selectedMarker === cityMarkers[index] && (
                  <InfoWindow onCloseClick={() => setSelectedMarker(null)}>
                    <div>
                      <h2>{weatherData[index].name}</h2>
                      <WeatherInfo data={weatherData[index].data} />
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>
        </div>
      )}
    </LoadScript>
  );
};
