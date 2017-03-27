(function (doc) {

  class Login {

    constructor(node) {
      this.node = node;
      this.template = document.querySelector('.template-login');
    }

    render() {
      const form = this.template.cloneNode(true);
      form.classList.toggle('template', false);

      this.node.appendChild(form);
    }

  }

  window.Login = Login;
})(document);
