export default class Router {

    constructor(node) {
        this.node = node;
        this.routes = {};
        this.current;
    }

    /**
     * Метод регестрирует новое view
     * @param {string} route
     * @param {Object} view
     */
    register(route, view) {
        this.routes[route] = view;
    }

    start() {

        this.node
            .addEventListener('click', event => this.onRouteChange(event));

    }

    _getRouteByPath(path) {
        return this.routes[path];
    }

    go(path) {

        if (this.current) {
            this.current.hide();
        }

        this.current = this._getRouteByPath(path);
        this.current.show();

        window.history.pushState({ page: 1 }, 'Titel', path);
    }

    onRouteChange(event) {

        if (!event.target instanceof HTMLAnchorElement) {
            return;
        }

        this.go(event.target.getAttribute('href'));
        event.preventDefault();
    }

}
