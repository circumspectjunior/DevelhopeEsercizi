import AlertClock from './AlertClock';
import './App.css';

function App() {

  const getCurrentTime = () => {
    const localTime = new Date().toLocaleTimeString();

    alert(`Current time is: ${localTime}`);
  }
  

  return (
    <>
      <div>

        <AlertClock currentTime={getCurrentTime}/>

      </div>
    </>
  )
}

export default App
