import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/Login.css';
import { auth } from '../firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    // firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully logged in user
        console.log(auth);
        if (auth) {
          history.push('/');
        }
      })
      .catch((err) => alert(err.message));
  };

  const createAccount = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created user with email and password
        console.log(auth);
        if (auth) {
          history.push('/');
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt='Amazon_logo'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='submit'
            className='login__containerSignInBtn'
            onClick={signIn}
          >
            Sign-in
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest Based Ads Notice.
        </p>
        <button
          type='submit'
          onClick={createAccount}
          className='login__containerCreateAccountBtn'
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
