import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import './Login.css';

function Login() {
  const {
    username,
    password,
    email,
    setUsername,
    setEmail,
    setPassword,
  } = useContext(AppContext);

  const [disabledBtn, setDisabledBtn] = useState(true);

  const navigate = useNavigate();

  // const saveLocalStore = (key, data) => localStorage
  //   .setItem(key, JSON.stringify(data));

  const handleSubmitBtn = (e) => {
    // saveLocalStore('user', { email });
    e.preventDefault();
    navigate('/');
  };

  const passwordMinLength = 6;
  const passwordVerification = () => password.length > passwordMinLength;

  const emailVerification = () => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };


  useEffect(() => {
    const validation = emailVerification() && passwordVerification();
    if (validation) setDisabledBtn(false);
    else setDisabledBtn(true);
  }, [email, password]);

  return (
    <div className="login-page">
      <form className="login-container">
      <p>User Login</p>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={ ({target}) =>setUsername(target.value) }
          value={ username }
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={ ({target}) =>setEmail(target.value) }
          value={ email }
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={ ({target}) =>setPassword(target.value) }
          value={ password }
        />
        <button
          type="button"
          placeholder="email"
          disabled={ disabledBtn }
          onClick={ handleSubmitBtn }
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;