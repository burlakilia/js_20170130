export default class Model {

    constructor(url) {
        this.url = url;
    }

    send(method, params) {

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const data = JSON.stringify(params);

            xhr.open(method, this.url, true);
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            xhr.addEventListener('readystatechange', function () {

                if (this.readyState !== XMLHttpRequest.DONE) {
                    return;
                }

                if (this.status !== 200) {
                    reject(this);
                } else {
                    resolve(this.responseText);
                }

            });

            xhr.send(data);
        });

    }


}