import Login from '../login/login';
import Logout from '../logout/logout';
import Signup from '../signup/signup';
import Note from '../note/note';
import NotesList from '../notesList/notesList';
import Cookies from 'js-cookie';
import Router from '../../modules/router';


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
    const router = new Router(document.body);
    const user = Cookies.get('user');

    router.register('/signin', new Login(document.querySelector('.js-login-view')));
    router.register('/signup', new Signup(document.querySelector('.js-signup-view')));
    router.register('/notes/{type}', function (event) {
        console.log(event.routeData.type);
    });

    router.start();
});
