import chalk from "chalk";

class Monster {
  constructor(maxHp, attackValue, name) {
    let status = "idle";
    this._maxHp = maxHp;
    this._current_hp = this._maxHp;
    this._attackValue = attackValue;
    this.monsterName = name; // 앞 6
    this.status = () => {
      if (this.current_hp <= 0) {
        status = "die";
      }
    };
    this.statusGet = () => {
      return status;
    };
  }
  add_Damage(value) {
    if ("defense" == this.statusGet()) {
      this._current_hp -= Math.floor(value / 2);
    } else {
      this._current_hp -= value;
    }
    this.status();
  }
  set current_hp(value) {
    this._current_hp = Math.max(0, Math.min(this._maxHp, value));
  }

  get current_hp() {
    return this._current_hp;
  }

  get attackValue() {
    return this._attackValue;
  }
  hp_Display() {
    let text = "";
    let hp_box = this._maxHp / 5;
    let fillBars = Math.floor(this._current_hp / hp_box);
    this.status();
    if (fillBars <= 0 && this.statusGet() != "die") {
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

    return chalk.redBright(`     ${text}`); // 5+5 // 10
  }
  name_Display() {
    return `      ${this.monsterName}`;
  }
  active() {}
}

export { Monster };
const test = new Monster();
