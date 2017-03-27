const temaplte = window.fest['src/blocks/login/login'];

export default class Login {

  constructor(node) {
    this.node = node;
    this.render();
  }

  render() {
    this.node.innerHTML = temaplte({
      texts: {
        login: 'Login',
        password: 'Password'
      }
    });
  }

}
