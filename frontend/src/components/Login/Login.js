import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css"
import { setUserSession } from '../../Ultis/Common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter ,faGoogle} from '@fortawesome/free-brands-svg-icons'
function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const handleLogin = () => {
    // setError(null);
    // setLoading(true);
    // axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
    //   setLoading(false);
    //   setUserSession(response.data.token, response.data.user);
      props.history.push('/users');
    // }).catch(error => {
    //   setLoading(false);
    //   if (error.response.status === 401) setError(error.response.data.message);
    //   else setError("Something went wrong. Please try again later.");
    // });
  }

  return (
            <div className="modal__login">
                <div className ="modal__login-inner">
                    <p>Sign up</p>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="modal__login-content">
                        <input type="text" {...username} autoComplete="new-password" name="username" id="username" placeholder="Username"/>
                        <input type="password" {...password} autoComplete="new-password" name="password" id="password" placeholder="Password"/>
                    <button className="btn__login" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading}>Login</button>
                    <p className="signwith">or sign up with</p>
                    <div className="login-with-social">
                        <FontAwesomeIcon icon ={faFacebook} className='fa-facebook-f'/>
                        <FontAwesomeIcon icon ={faGoogle} className='fa-google'/>
                        <FontAwesomeIcon icon ={faTwitter} className ='fa-twitter'/>
                    </div>
                    <div className="login__create">
                        <p>Don't have an account?</p>
                        <a href="#">Create an account</a>
                    </div>
                </div>
            </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;