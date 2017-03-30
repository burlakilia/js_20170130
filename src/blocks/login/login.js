import template from './login.xml.js';
export default class Login {

  constructor(node) {
    this.node = node;
    this.render();
  }

  render() {
    this.node.innerHTML = template({
      texts: {
        login: 'Login',
        password: 'Password',
      },
    });
  }

}
