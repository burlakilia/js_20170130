import Model from './model';

export default class User extends Model {

    login(login, password) {

        return this.send('GET', {
            login,
            password
        })

    }

}