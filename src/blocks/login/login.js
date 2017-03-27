((doc) => {
  class Login {

    constructor(node) {
      this.node = node;
    }

    render() {
      const form = doc.querySelector('.template.login').cloneNode(true);

      form.classList.toggle('template', false);
      this.node.appendChild(form);
    }
  }

  window.Login = Login;
})(window.document);
