import { useState } from "react";

export const useCurrentLocation = () => {
  const [location, setLocation] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
    } else {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError(null);
          setLoading(false);
        },
        (error) => {
          setError(error.message);
          setLoading(false);
          console.log("passa da qui");
        }
      );
    }
  };

  return {
    location,
    error,
    loading,
    getLocation,
  };
};
