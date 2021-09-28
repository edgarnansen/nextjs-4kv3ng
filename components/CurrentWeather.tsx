import { useGeoLocation } from '../hooks/useGeoLocation';
import { Weather } from './Weather';
import styles from './CurrentWeather.module.css';

export const CurrentWeather = () => {
  const { location, permissionState, requestLocation } = useGeoLocation();

  if (permissionState == null || permissionState === 'denied') {
    return null;
  }

  return (
    <aside className={styles.container}>
      <h3 className={styles.header}>Været der du er: </h3>
      {permissionState === 'prompt' && (
        <button
          onClick={() => {
            requestLocation(true);
          }}
        >
          Hent været
        </button>
      )}
      {location != null && <Weather location={location} />}
    </aside>
  );
};
