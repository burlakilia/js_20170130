import template from './signup.xml.js';

export default class Signup {

  constructor(node) {
    this.node = node;
    this.render();
  }

  render() {
    this.node.innerHTML = template({
      texts: {
        login: 'Login',
        password: 'Password',
        email: 'Email',
      },
    });
  }

}

