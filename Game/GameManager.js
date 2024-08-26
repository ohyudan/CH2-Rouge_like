import { Player } from "../GameObject/Player.js";
import { Monster } from "../GameObject/Monster.js";
import { RenderHandle } from "./RenderHandle.js";
import { InputHandle } from "./InputHandle.js";
import { Lobby } from "../Displays/Lobby_Display.js";
import { Battle } from "../Displays/Battle_Display.js";
class GameManager {
  constructor() {
    let inputHandle;
    let inputValue;
    let RenderHandle;
    this._GameStatus_Lobby = {
      status: false,
      input: "-",
    };
    this.InputHandle_Set = function (inputHandle) {
      if (InputHandle === inputHandle) {
        this.inputHandle = inputHandle;
      }
    };
  }
  set input(value) {
    this._input = value;
  }
  Update() {}
  Lobby() {}
  Battle() {}
  Start() {
    this._GameStatus_Lobby.status = true;
    this._GameStatus_Lobby.input = "-";
  }
}

export { GameManager };
