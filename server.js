const http = require('http');
const fs = require('fs');
const cookie = require('cookie');
const static = require('node-static');
const file = new static.Server('.', {
    cache: 0
});

const customers = require('./db/customer.json');

function accept(req, res) {
    if (req.url === '/login') {
        req.on('data', function(body) {
            const data = JSON.parse(body);
            const result = JSON.stringify(login(data));

            setUserCookie(data, res);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(result);
        });

    } else if (req.url === '/signup') {
        req.on('data', function(body) {
            const data = JSON.parse(body);
            const result = JSON.stringify(signUp(data));

            setUserCookie(data, res);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(result);
        });

    } else {
        file.serve(req, res);
    }
}

function setUserCookie(data, res) {
    res.setHeader('Set-Cookie', cookie.serialize('user', String(data.login), {
        httpOnly: false,
        maxAge: 60 * 60 * 24 * 7 // 1 week
    }));
}

function checkCustomer(data, checkPass) {
    for (let key in customers) {
        if (data.login !== customers[key].login) {
            continue;
        }

        if (!checkPass) {
            return true;
        }

        if (checkPass && data.password === customers[key].password) {
            return true;
        }
    }

    return false;
}

function login(data) {
    const isCustomer = checkCustomer(data, true);
    const status = (isCustomer) ? "success" : "error";
    const message = (isCustomer) ? "You are log in!" : "Wrong login or password";

    return {
        "status": status,
        "message": message
    };
}

function signUp(data) {
    const isCustomer = checkCustomer(data);
    const status = (isCustomer) ? "error" : "success";
    const message = (isCustomer) ? "User with this login already exists" : "You are sign up!";

    if (!isCustomer) {
        customers.push(data);

        fs.writeFile('./db/customer.json', JSON.stringify(customers), function (err) {
            if (err) {
                console.log('fail write file');
            } else {
                console.log('done write file');
            }
        })
    }

    return {
        "status": status,
        "message": message
    };
}

// ------ запустить сервер -------

if (!module.parent) {
    http.createServer(accept).listen(8080);
} else {
    exports.accept = accept;
}