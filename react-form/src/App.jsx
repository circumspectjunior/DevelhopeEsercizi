import './App.css';
import InteractiveWelcome from './interactiveWelcome';
import LogIn from './LogIn';
import UnControlledLogIn from './unControlledLogIn';

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

      <div>
        <UnControlledLogIn onLogin={handleLogin}/>
      </div>
    
    </>
  )
}

export default App
