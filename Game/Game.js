import { GameManager } from "./GameManager.js";
import { InputHandle } from "./InputHandle.js";
import { RenderHandle } from "./RenderHandle.js";
class Game {
  constructor() {
    this._gameManager = new GameManager();
    this._inputHandle = new InputHandle();
    this._renderHandle = new RenderHandle();
    this._GameRunning = false;
  }
  Start() {
    this.Init();
    while (this._GameRunning) {
      this.Input();
      this.Update();
      this.Render();
    }
  }
  Init() {
    this._gameManager.Start();
    this._gameManager.InputHandle_Set(this._inputHandle);
    this.Render();
    this._GameRunning = true;
  }
  Input() {
    this._inputHandle.Input();
  }
  Update() {}
  Render() {
    this._renderHandle.Out();
  }
}

// export async function startGame() {
//   console.clear();
//   const player = new Player();
//   let stage = 1;

//   while (stage <= 10) {
//     const monster = new Monster(stage);
//     await battle(stage, player, monster);

//     // 스테이지 클리어 및 게임 종료 조건

//     stage++;
//   }
// }

const Game_ = new Game();

Game_.Start();
// setTimeout(Game_.Init.bind(Game_), 1000);
// setTimeout(Game_.Start.bind(Game_), 1000);
