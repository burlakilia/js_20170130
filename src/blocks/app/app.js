import Login from '../login/login';
import Logout from '../logout/logout';
import Signup from '../signup/signup';
import Note from '../note/note';
import NotesList from '../notesList/notesList';
import Cookies from 'js-cookie';

const data = [{
    header: 'Заметка 1',
    text: 'Текст заметки 1',
    color: 'red'
}, {
    header: 'Заметка 2',
    text: 'Текст заметки 2',
    color: 'green'
}];

function initNotesList() {
    const notesList = new NotesList(document.querySelector('.js-notes-list'), data);

    data.forEach((element) => {
        const note = new Note({
            node: document.querySelector('.js-note-view'),
            header: element.header,
            text: element.text,
            color: element.color
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const user = Cookies.get('user');

    if (!user) {
        const login = new Login(document.querySelector('.js-login-view'));
        const signup = new Signup(document.querySelector('.js-signup-view'));
    } else {
        const logout = new Logout(document.querySelector('.js-logout-view'));
        initNotesList();
    }

    document.body.addEventListener('user.login', () => {
        document.querySelector('.js-login-view').innerHTML = '';
        document.querySelector('.js-signup-view').innerHTML = '';

        const logout = new Logout(document.querySelector('.js-logout-view'));
        initNotesList();
    });
});
