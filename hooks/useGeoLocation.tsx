import { useEffect, useState } from 'react';

const isPermissionsAPISupported = () => navigator.permissions != null;
const positionToString = ({
  coords: { latitude, longitude },
}: GeolocationPosition) => `(${latitude}, ${longitude})`;

export const useGeoLocation = () => {
  const [hasPermissionsAPISupport, setHasPermissionsAPISupport] =
    useState<boolean>();
  const [geoLocationPermissionState, setGeoLocationPermissionState] =
    useState<PermissionState>();
  const [geoLocation, setGeoLocation] = useState<GeolocationPosition>();
  const [requestLocation, setRequestLocation] = useState(false);

  useEffect(() => {
    console.log('Checking if permissions API is supported...');
    if (!isPermissionsAPISupported()) {
      console.log("It isn't.");
      return;
    }
    console.log('It is!');
    setHasPermissionsAPISupport(true);
  }, []);

  useEffect(() => {
    if (hasPermissionsAPISupport == null) {
      // We still don't know if permission API is supported
      return;
    }
    if (!hasPermissionsAPISupport) {
      // We now know that permission API is not supported
      return;
    }
    console.log('Checking if user has given permission to geolocation ');
    const checkForGeolocationPermission = async () => {
      const { state } = await navigator.permissions.query({
        name: 'geolocation',
      });
      console.log(`Geolocation permission state is ${state}`);
      setGeoLocationPermissionState(state);
      if (state === 'granted') {
        setRequestLocation(true);
      }
    };

    checkForGeolocationPermission();
  }, [hasPermissionsAPISupport]);

  useEffect(() => {
    if (!hasPermissionsAPISupport) {
      // We don't prompt if we don't have permissions API
      return;
    }
    if (geoLocationPermissionState === 'denied') {
      // We don't prompt when the user has asked us not to
      return;
    }
    if (geoLocationPermissionState === 'prompt' && !requestLocation) {
      // The user hasn't tried to fetch the weather yet
      return;
    }
    console.log('Getting current position!');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGeoLocationPermissionState('granted');
        setGeoLocation(position);
        console.log(`Position is ${positionToString(position)}`);
      },
      (error) => {
        if (error.code !== error.PERMISSION_DENIED) {
          console.log('Something went wrong...');
          console.error(error);
          return;
        }
        console.log('User denied permission for geolocation');
        setGeoLocationPermissionState('denied');
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, [requestLocation]);

  return {
    location: geoLocation,
    permissionState: geoLocationPermissionState,
    requestLocation: setRequestLocation,
  };
};
