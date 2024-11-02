import { createContext } from 'react';
import './App.css';
import Hello from './Hello';
import InteractiveWelcome from './interactiveWelcome';
import LogIn from './LogIn';
import UnControlledLogIn from './unControlledLogIn';

function App() {

  // Create the LanguageContext
const LanguageContext = createContext();

const [language, setLanguage] = useState('en');

const handleChange = (event) => {
  setLanguage(event.target.value);
};


// Language translations
const translations = {
  en: 'Hello, World!',
  es: '¡Hola, Mundo!',
  fr: 'Bonjour, le Monde!',
  de: 'Hallo, Welt!',
};

  
    const handleLogin = (state) => {
      console.log('Login state:', state);
    };
  

  return (
    <LanguageContext.Provider value={language}>

    
    <>
    <div>
        <select value={language} onChange={handleChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
        <Hello />
      </div>


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

  </LanguageContext.Provider>
    
  )
}

export default App;
