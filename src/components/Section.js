export default class Section {
    constructor({renderer}, containerSelector) {
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  
    render(items) {
      items.forEach((item) => {
        this._renderer(item);
      });
    }
  
    addItem(el) {
      this._container.prepend(el);
    }
  }