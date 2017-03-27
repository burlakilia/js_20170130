const template = window.fest['src/blocks/signup/signup'];

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
        email: 'Email'
      }
    });
  }

}

