import { Monster } from "./Monster.js";
import { ramdom } from "./Ramdom.js";
class MonsterFactory {
  constructor() {
    // 추후 액티브를 이용해 각자 스킬 추가
    this._stage;
    this._MonsterNamelist = [
      //stage x hp x 6~10 // stage x att x 1~2
      { name: "좀비", stagemin: 1, stageMax: 5, hp: 2, attvalue: 3 }, //5
      { name: "스켈레톤", stagemin: 1, stageMax: 5, hp: 3, attvalue: 3 }, //6
      { name: "들개", stagemin: 1, stageMax: 3, hp: 1, attvalue: 3 }, //4
      { name: "유령", stagemin: 3, stageMax: 7, hp: 4, attvalue: 3 }, //7
      { name: "리치", stagemin: 4, stageMax: 9, hp: 4, attvalue: 6 }, //10
      { name: "발록", stagemin: 6, stageMax: 9, hp: 7, attvalue: 3 }, //10
      { name: "악마", stagemin: 5, stageMax: 9, hp: 5, attvalue: 5 }, //10
      { name: "마왕", stagemin: 10, stageMax: 10, hp: 10, attvalue: 7 }, //17
      { name: "드래곤", stagemin: 10, stageMax: 10, hp: 7, attvalue: 10 }, //17
    ];
  }

  newMonster(stage) {
    let list = this._MonsterNamelist.filter(function (monster) {
      return monster.stagemin <= stage && stage <= monster.stageMax;
    });
    let random_Int = ramdom(0, list.length);
    let result = new Monster(
      list[random_Int].hp * stage * ramdom(6, 10),
      list[random_Int].attvalue * stage * (1, 2),
      list[random_Int].name
    );
    return result;
  }
}
export { MonsterFactory };
