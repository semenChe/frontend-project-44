import gameEngine from '../index.js';
import randomNumber from '../helper.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const expectedAnswerGeneration = (randomOperator, firstOperand, secondOperand) => {
  let result = 0;
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
const dataGeneration = () => {
  const randomOperator = operators[randomNumber(0, 3)];
  const firstOperand = randomNumber(0, 11);
  const secondOperand = randomNumber(0, 11);
  const anotherGameQuestion = `${firstOperand} ${randomOperator} ${secondOperand}`;
  const expectedAnswer = expectedAnswerGeneration(randomOperator, firstOperand, secondOperand);
  return [anotherGameQuestion, expectedAnswer];
};
export default () => {
  gameEngine(description, dataGeneration);
};
