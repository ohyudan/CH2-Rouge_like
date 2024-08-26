import chalk from "chalk";
import { ramdom } from "./Ramdom.js";
class Player {
  constructor() {
    let status = "idle";
    this._maxHp = 100;
    this._maxMp = 100;
    this._current_hp = 100;
    this._current_mp = 100;
    this._attackValue = 10;

    this.attackValue_Ramdom_Max = 10;
    this.attackValue_Ramdom_Min = 1;

    this.run_Value = 10;
    this.doubleAtt = 10;

    this.playerName = "전사";

    this.status = (value) => {
      if (this.current_hp <= 0) {
        status = "die";
      } else {
        switch (value) {
          case "defense":
            status = "defense";
            break;
          case "idle":
            status = "idle";
            break;
          case null:
            status = "idle";
            break;
        }
      }
    };
    this.statusGet = () => {
      return status;
    };
  }

  set current_mp(value) {
    this._current_mp = Math.max(0, Math.min(this._maxMp, value));
  }

  get current_hp() {
    return this._current_hp;
  }

  get attackValue() {
    return this._attackValue;
  }

  get current_mp() {
    return this._current_mp;
  }
  set current_hp(value) {
    this._current_hp = Math.max(0, Math.min(this._maxHp, value));
  }
  Attack() {
    let result = [];
    let random_Int = ramdom(
      this.attackValue_Ramdom_Min,
      this.attackValue_Ramdom_Max
    );
    result.push(this.attackValue + random_Int);
    let ramdom_double = ramdom(0, 100);
    if (ramdom_double < 100 / this.doubleAtt) {
      result.push(true);
    } else {
      result.push(false);
    }
    return result;
  }
  add_Damage(value) {
    let result = value;
    if ("defense" == this.statusGet()) {
      result = Math.floor(value / ramdom(0, 4));
      if (result == Infinity) {
        result = 0;
      }
      this.current_hp -= result;

      this.status("idle");
    } else {
      this._current_hp -= result;
    }
    this.status();
    return result;
  }
  run() {
    let temp = ramdom(0, 100);
    return temp < 100 / this.run_Value ? true : false;
  }
  level_Up(stage) {
    this._maxHp += ramdom(stage, stage * 6);
    this._maxMp += ramdom(stage, stage * 6);
    this._attackValue += ramdom(stage, stage * 4);
    this.attackValue_Ramdom_Max += ramdom(stage, stage * 4);
    this.attackValue_Ramdom_Min += ramdom(
      stage,
      Math.floor(this.attackValue_Ramdom_Max / 2)
    );
    this.run_Value += stage;
    this.current_hp += this._maxHp / ramdom(0, 3);
    this.current_mp += this._maxMp / ramdom(0, 3);
    this.doubleAtt += ramdom(0, stage * 2);
  }

  hp_Display() {
    let text = "";
    let hp_box = this._maxHp / 5;
    let fillBars = Math.floor(this._current_hp / hp_box);
    this.status();
    if (fillBars <= 0 && this.statusGet() == "idie") {
      fillBars = 1;
      let emptyBar = 5 - fillBars;
      text += `■`.repeat(fillBars);
      text += `□`.repeat(emptyBar);
    } else if (this.statusGet() == "die") {
      let emptyBar = 5;
      text += `□`.repeat(emptyBar);
    } else {
      let emptyBar = 5 - fillBars;
      text += `■`.repeat(fillBars);
      text += `□`.repeat(emptyBar);
    }

    return chalk.blueBright(`    ${text}    `); // 13
  }
  name_Display() {
    //나중에 리피트 활용

    return `     ${this.playerName}    `; //12 // 한글자 -2 (앞뒤)
  }
}

export { Player };

let test = new Player();
test.status();
console.log(test.statusGet());
