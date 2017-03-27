import Login from '../login/login';
import Signup from '../signup/signup';

document.addEventListener('DOMContentLoaded', () => {
  const login = new Login(document.querySelector('.js-login-view'));
  const signup = new Signup(document.querySelector('.js-signup-view'));
});

