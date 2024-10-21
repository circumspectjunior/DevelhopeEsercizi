

const UncontrolledLogIn = ({ onLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    const remember = form.remember.checked;
    onLogin({ username, password, remember });
  };

  const loginWithFormData = (event) => {
    const form = event.target.form;
    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');
    const remember = formData.get('remember') === 'on';
    console.log({ username, password, remember });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <label>
        <input type="checkbox" name="remember" />
        Remember me
      </label>
      <button type="submit">Login</button>
      <button type="button" onClick={loginWithFormData}>
        Login with FormData
      </button>
    </form>
  );
}


export default UncontrolledLogIn;