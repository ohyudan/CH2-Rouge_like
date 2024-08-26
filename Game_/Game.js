import chalk from "chalk";
import readlineSync from "readline-sync";
import { Player } from "./Player.js";
import { Monster } from "./Monster.js";
import { MonsterFactory } from "./Monsterfactory.js";

let logs = [];

function displayStatus(stage, player, monster) {
  console.log(
    chalk.magentaBright(`\n============= Current Status =============`)
  );
  console.log(
    chalk.cyanBright(`| Stage: ${stage} `) +
      chalk.blueBright(`| 플레이어 정보`) +
      chalk.redBright(`| 몬스터 정보 |`)
  );
  console.log(``);
  console.log(
    chalk.cyanBright(`    이름:    `) +
      player.name_Display() +
      monster.name_Display()
  );
  console.log(``);
  console.log(
    chalk.cyanBright(`     HP      `) +
      player.hp_Display() +
      monster.hp_Display()
  );
  console.log(
    chalk.magentaBright(`==========================================\n`)
  );
}

const battle = async (stage, player, monster) => {
  let bool_turn_add = false;
  let bool_err_turn_add = false;
  let bool_run = false;

  while (player.statusGet() != "die") {
    console.clear();
    displayStatus(stage, player, monster);

    logs.forEach((log) => console.log(log));

    console.log(
      chalk.green(
        `\n1. 공격한다 2. 방어 3. 스킬 4.도망친다 5. 상태창 6.게임 종료`
      )
    );

    if (logs.length > 0) logs.splice(0, logs.length);

    const choice = readlineSync.question("당신의 선택은? ");
    // 플레이어의 선택에 따라 다음 행동 처리
    logs.push(chalk.green(`${choice}를 선택하셨습니다.`));

    switch (choice) {
      case "1":
        let damage = player.Attack(bool_turn_add);
        monster.add_Damage(damage[0]);
        logs.push(`${monster.monsterName}에게 ${damage[0]}데미지를 주었습니다`);
        if (monster.statusGet() == "idle") {
          damage[1] === true ? (bool_turn_add = true) : (bool_turn_add = false);
          logs.push(
            `연속공격에 ${damage[1] === true ? "성공" : "실패"} 했습니다.`
          );
        }

        break;
      case "2":
        logs.push(`${player.playerName}가 방어합니다.`);
        player.status("defense");
        break;
      case "3":
        break;
      case "4":
        bool_run = player.run();
        logs.push(
          `${
            bool_run
              ? `${monster.monsterName}에게 도망쳤습니다.`
              : "도망에 실패했습니다."
          }`
        );
        break;
      case "5":
        break;
      case "6":
        console.log(chalk.red("게임 종료합니다."));
        process.exit();
      default:
        bool_err_turn_add = true;
        break;
    }
    if (bool_turn_add) {
      bool_turn_add = false;
      logs.push(chalk.red(`${player.playerName}의 추가 턴.`));
    } else if (bool_err_turn_add) {
      bool_err_turn_add = false;
      logs.push(chalk.red(`잘못된 값입니다.`));
    } else if (bool_run) {
      player.level_Up(stage);
      logs.push(chalk.yellowBright("레벨업!!!!!!"));
      break;
    } else {
      // 몬스터 턴
      if (monster.statusGet() == "die") {
        logs.push(`${monster.monsterName}이(가) 사망했습니다.`);
        player.level_Up(stage);
        logs.push(chalk.yellowBright("레벨업!!!!!!"));
        break;
      } else {
        let damage = player.add_Damage(monster.attackValue);
        logs.push(
          `${monster.monsterName}이(가) ${player.playerName}에게 ${damage}데미지를 주었습니다`
        );
      }
    }
  }
};

export async function startGame() {
  console.clear();
  const player = new Player();
  const monsterFactory = new MonsterFactory();
  let stage = 1;

  while (stage <= 10) {
    const monster = monsterFactory.newMonster(stage);
    console.log(chalk.red(`${monster.monsterName}이(가) 나타났습니다.`));
    await battle(stage, player, monster);
    // 스테이지 클리어 및 게임 종료 조건
    if (player.statusGet() == "die") {
      console.log("사망하셨습니다.");
      console.log("게임을 종료합니다.");
      process.exit();
    }
    stage++;
  }
  logs.slice(0, logs.length);
  logs.push("게임 클리어!");
  logs.push("게임을 종료합니다.");
  logs.forEach((log) => {
    console.log(log);
  });
}
