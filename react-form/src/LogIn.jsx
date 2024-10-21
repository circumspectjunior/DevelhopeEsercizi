import { useState } from "react";
const LogIn = ({onLogin}) => {

    
        
            const [username, setUsername] = useState('');
            const [password, setPassword] = useState('');
            const [remember, setRemember] = useState(false);
          
            const handleUsernameChange = (event) => {
              setUsername(event.target.value);
            };
          
            const handlePasswordChange = (event) => {
              setPassword(event.target.value);
            };
          
            const handleRememberChange = (event) => {
              setRemember(event.target.checked);
            };
          
            const handleSubmit = (event) => {
              event.preventDefault();
              onLogin({ username, password, remember });
            };
            
            const handleReset = (event) => {
              event.preventDefault();
              setPassword("");
              setUsername("");
              setRemember(false);



            }
          
            const isButtonDisabled = !username && !password;
          
            return (
              <div>
                <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <label>
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={handleRememberChange}
                  />
                  Remember me
                </label>
                <button disabled={isButtonDisabled} type="submit">
                  Login
                </button>

                //the event.preventDefault() is used to prevent the default behaviour of the form

                <button onClick={handleReset}>Reset</button>
                </form>
              </div>
    )
}

export default LogIn;