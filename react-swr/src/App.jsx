import { SWRConfig } from "swr";
import "./App.css";

function App() {
  const fetcher = (url) => fetch(url).then((res) => res.json);

  return (
    <>
      <SWRConfig value={{ fetcher }}></SWRConfig>
    </>
  );
}

export default App;
