import { useQuery } from 'react-query';

interface WeatherResponse {
  symbolCode: string;
}

const fetchWeather = async (latitude: number, longitude: number) => {
  const response = await fetch(
    `/api/integration/weather/?lat=${latitude}&lon=${longitude}`
  );
  const result = (await response.json()) as WeatherResponse;
  return result;
};

export const useWeather = ({ latitude, longitude }: GeolocationCoordinates) => {
  const query = useQuery(
    ['weather', latitude, longitude],
    () => fetchWeather(latitude, longitude),
    {
      refetchOnWindowFocus: false,
      retry: 5,
    }
  );

  return query;
};
