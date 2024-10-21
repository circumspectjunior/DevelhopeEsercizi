import './App.css';
import InteractiveWelcome from './interactiveWelcome';
import LogIn from './LogIn';

function App() {

  
    const handleLogin = (state) => {
      console.log('Login state:', state);
    };
  

  return (
    <>
      <div>
        <InteractiveWelcome />
       
      </div>

      <div>
        <LogIn onLogin={handleLogin} />
      </div>
    
    </>
  )
}

export default App
