import axios from 'axios';

export const fetchWeatherData = async (lat: number, lng: number) => {
  try {
    const response = await axios.get(
      `https://weatherapi.pelmorex.com/v1/observation?lat=${lat}&long=${lng}`
    );
    return response;
  } catch (error) {
    console.error(`Error fetching weather data`, error);
    return null;
  }
};
