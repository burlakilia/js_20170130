import template from './logout.xml.js';
import Cookies from 'js-cookie';

export default class Logout {
    constructor(node) {
        this.node = node;
        this.render();
        this.events();
    }

    render() {
        this.node.innerHTML = template();
    }

    events() {
        document.querySelector('.js-logout-view').addEventListener('click', this.onClick.bind(this));
    }

    onClick(ev) {
        const target = ev.target;

        if (target.classList.contains('js-logout-link')) {
            Cookies.remove('user');
            document.location = '/';
        }
    }
}
