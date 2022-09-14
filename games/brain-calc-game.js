import * as index from '../src/index.js';
import randomNumber from '../src/randomNumber.js';

const expression = () => {
  index.gameStart();
  const name = index.nameCreation();
  index.greetings(name);
  index.whatAreTheRulesOfTheGame('What is the result of the expression?');
  const operators = ['+', '-', '*'];
  let randomOperator = '';
  let firstOperand = 0;
  let secondOperand = 0;
  const quest = () => {
    randomOperator = operators[randomNumber(0, 3)];
    firstOperand = randomNumber(0, 11);
    secondOperand = randomNumber(0, 11);
    return `${firstOperand} ${randomOperator} ${secondOperand}`;
  };
  let result = 0;
  const correctAnswer = () => {
    switch (randomOperator) {
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '+':
        result = firstOperand + secondOperand;
        break;
      default:
        result = firstOperand - secondOperand;
        break;
    }
    return String(result);
  };
  index.cycle(quest, correctAnswer, name);
};
export default expression;
