import template from './signup.xml.js';

export default class Signup {
    constructor(node) {
        this.node = node;
        this.render();
        this.cache();
        this.events();
        this.node.hidden = true;
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

    show() {
        this.node.hidden = false;
    }

    hide() {
        this.node.hidden = true;
    }

    cache() {
        this.formName = 'formSingup';
    }

    events() {
        document.querySelector('.js-signup-view').addEventListener('submit', this.submit.bind(this));
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
            email: form.email.value,
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
