import { Display } from "../Displays/Display.js";
const battle = async (stage, player, monster) => {
  let logs = [];

  while (player.hp > 0) {
    console.clear();
    displayStatus(stage, player, monster);

    logs.forEach((log) => console.log(log));

    console.log(chalk.green(`\n1. 공격한다 2. 아무것도 하지않는다.`));
    const choice = readlineSync.question("당신의 선택은? ");

    // 플레이어의 선택에 따라 다음 행동 처리
    logs.push(chalk.green(`${choice}를 선택하셨습니다.`));
  }
};
// 배틀 처리 및 출력

class Battle extends Display {
  display(stage, player, monster) {
    this._text.push(chalk.magentaBright(`\n=== Current Status ===`));
    this._text.push(
      chalk.cyanBright(`| Stage: ${stage} `) +
        chalk.blueBright(`| 플레이어 정보 ${player}`) +
        chalk.redBright(`| 몬스터 정보 |`)
    );
    this._text.push(chalk.magentaBright(`=====================\n`));
  }
}

export { Battle };
