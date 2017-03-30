import Login from '../login/login';
import Signup from '../signup/signup';
import Note from '../note/note';
import NotesList from '../notesList/notesList';

const data = [{
  header: 'Заметка 1',
  text: 'Текст заметки 1',
  color: 'red',
}, {
  header: 'Заметка 2',
  text: 'Текст заметки 2',
  color: 'green',
}];


document.addEventListener('DOMContentLoaded', () => {
  const login = new Login(document.querySelector('.js-login-view'));
  const signup = new Signup(document.querySelector('.js-signup-view'));
  const notesList = new NotesList(document.querySelector('.js-notes-list'), data);

  data.forEach((element) => {
    const note = new Note({
    	node: document.querySelector('.js-note-view'),
    	header: element.header,
    	text: element.text,
    	color: element.color,
    });
  });
});

