import { Display } from "../Displays/Display.js";
import { Lobby } from "../Displays/Lobby_Display.js";
class RenderHandle {
  constructor() {
    this._display = new Lobby();
  }
  Clear() {
    console.clear();
  }
  // set _display(value) {
  //   if (Display === value) {
  //     this._display = value;
  //   }
  // }
  Out() {
    this.Clear();
    for (let i = 0; i < this._display._text.length; i++) {
      console.log(this._display._text[i]);
    }
  }
}
export { RenderHandle };

// const test = new RenderHandle();
// test.Create();
// test.Out();
