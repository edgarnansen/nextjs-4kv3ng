import { useWeather } from '../hooks/useWeather';
import Image from 'next/image';

interface WeatherProps {
  location: GeolocationPosition;
}

export const Weather: React.FC<WeatherProps> = ({ location }) => {
  const { data, error, isLoading } = useWeather(location.coords);
  if (!data) {
    return null;
  }
  return (
    <Image
      src={`/weather_icons/${data.symbolCode}.svg`}
      width="64"
      height="64"
    />
  );
};
