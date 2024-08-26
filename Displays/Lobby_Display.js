import chalk from "chalk"; // 출력
import figlet from "figlet"; //글씨 꾸미기
import { Display } from "../Displays/Display.js";
class Lobby extends Display {
  display() {
    this._text.push(
      chalk.cyan(
        figlet.textSync("RL - Javascript", {
          font: "Standard",
          horizontalLayout: "default",
          verticalLayout: "default",
        })
      )
    );
    this._text.push(chalk.magentaBright("=".repeat(50)));
    this._text.push(chalk.yellowBright.bold("CLI 게임에 오신것을 환영합니다!"));
    this._text.push(chalk.green("옵션을 선택해주세요."));
    this._text.push(`\n`);
    this._text.push(chalk.blue("1.") + chalk.white(" 새로운 게임 시작"));
    this._text.push(chalk.blue("2.") + chalk.white(" 업적 확인하기"));
    this._text.push(chalk.blue("3.") + chalk.white(" 옵션"));
    this._text.push(chalk.blue("4.") + chalk.white(" 종료"));
    this._text.push(chalk.magentaBright("=".repeat(50)));
    this._text.push(chalk.gray("1-4 사이의 수를 입력한 뒤 엔터를 누르세요."));
  }
}

export { Lobby };
