//import chalk from "chalk"; // 출력
import readlineSync from "readline-sync"; // 입력

class InputHandle {
  constructor() {}
  Input() {
    let answer = readlineSync.question("입력 :");
    return answer;
  }
}

function handleUserInput() {
  const choice = readlineSync.question("입력: ");
  console.log("Test");
  switch (choice) {
    case "1":
      console.log(chalk.green("게임을 시작합니다."));
      // 여기에서 새로운 게임 시작 로직을 구현
      startGame();
      break;
    case "2":
      console.log(chalk.yellow("구현 준비중입니다.. 게임을 시작하세요"));
      // 업적 확인하기 로직을 구현
      handleUserInput();
      break;
    case "3":
      console.log(chalk.blue("구현 준비중입니다.. 게임을 시작하세요"));
      // 옵션 메뉴 로직을 구현
      handleUserInput();
      break;
    case "4":
      console.log(chalk.red("게임을 종료합니다."));
      // 게임 종료 로직을 구현
      process.exit(0); // 게임 종료
      break;
    default:
      console.log(chalk.red("올바른 선택을 하세요."));
      handleUserInput(); // 유효하지 않은 입력일 경우 다시 입력 받음
  }
}
// 입력 및 출력 및 처리
export { InputHandle };
