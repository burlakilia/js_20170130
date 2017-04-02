import template from './login.xml.js';

export default class Login {
    constructor(node) {
        this.node = node;
        this.render();
        this.cache();
        this.events();
    }

    render() {
        this.node.innerHTML = template({
            texts: {
                login: 'Login',
                password: 'Password'
            }
        });
    }

    cache() {
        this.formName = 'formLogin';
    }

    events() {
        document.querySelector('.js-login-view').addEventListener('submit', this.submit.bind(this));
    }

    submit(ev) {
        const form = ev.target;
        const url = form.getAttribute('action');

        if (form.getAttribute('name') !== this.formName) {
            return;
        }

        ev.preventDefault();

        const xhr = new XMLHttpRequest();
        const data = JSON.stringify({
            login: form.login.value,
            password: form.password.value
        });

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState !== 4) {
                return;
            }

            if (xhr.status !== 200) {
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                const response = JSON.parse(xhr.responseText);
                alert(response.message);

                if (response.status === 'success') {
                    const event = new CustomEvent('user.login');
                    document.body.dispatchEvent(event);
                }
            }
        });

        xhr.send(data);
    }
}
