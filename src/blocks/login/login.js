import template from './login.xml.js';
import User from '../../models/user';

export default class Login {
    constructor(node) {
        this.node = node;
        this.render();
        this.cache();
        this.events();
        this.node.hidden = true;

        this.model = new User('//test.com');
    }

    render() {
        this.node.innerHTML = template({
            texts: {
                login: 'Login',
                password: 'Password'
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

        this.model.login({
            login: form.login.value,
            password: form.password.value
        }).then(function () {
           console.log('ok');
        });

    }
}
