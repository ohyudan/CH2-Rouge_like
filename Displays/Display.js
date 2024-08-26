class Display {
  constructor() {
    this._text = [];
    this.display();
  }
  get text() {
    return this._text;
  }
  display() {}
}

export { Display };
