import template from './note.xml.js';

export default class Note {

  constructor(options) {
    this.node = options.node;
    this.options = options;
    this.render();
  }

  render() {
    const note = template({
      texts: {
        noteHeader: this.options.header,
        noteText: this.options.text,
      },
      view: {
        color: this.options.color,
      },
    });

    this.node.insertAdjacentHTML('beforeend', note);
  }

}

