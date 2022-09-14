import * as index from '../src/index.js';
import randomNumber from '../src/randomNumber.js';

const expression = () => {
  index.gameStart();
  const name = index.nameCreation();
  index.greetings(name);
  index.whatAreTheRulesOfTheGame('What is the result of the expression?');
  const operators = ['+', '-', '*'];
  let randomOperator = '';
  let randomNumber1 = 0;
  let randomNumber2 = 0;
  const quest = () => {
    randomOperator = operators[randomNumber(0, 3)];
    randomNumber1 = randomNumber(0, 11);
    randomNumber2 = randomNumber(0, 11);
    return `${randomNumber1}${randomOperator}${randomNumber2}`;
  };
  let result = 0;
  const correctAnswer = () => {
    switch (randomOperator) {
      case '*':
        result = randomNumber1 * randomNumber2;
        break;
      case '+':
        result = randomNumber1 + randomNumber2;
        break;
      default:
        result = randomNumber1 - randomNumber2;
        break;
    }
    return String(result);
  };
  index.cycle(quest, correctAnswer, name);
};
export default expression;
