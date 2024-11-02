import { useEffect } from "react";
import "./App.css";
import { useCurrentLocation } from "./useCurrentLocation";

function App() {
  const { location, getLocation, error } = useCurrentLocation();

  useEffect(() => {
    getLocation();
  }, []);

  if (error) {
    console.log(error);
  }

  const apiUrl = process.env.REACT_APP_API_URL;
  console.log("env", apiUrl);

  return (
    <>
      <h1>React Custom Hooks</h1>
      <div>
        {location.longitude || location.latitude ? (
          <p>
            Longitude:{location.longitude}, Latitude:{location.latitude}
          </p>
        ) : null}
      </div>
    </>
  );
}

export default App;
