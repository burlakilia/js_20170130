import template from './notesList.xml.js';

export default class NotesList {

  constructor(node, data) {
    this.node = node;

    this.render(data);
  }

  render(data) {
    const note = template(data);

    this.node.insertAdjacentHTML('beforeend', note);
  }

}

