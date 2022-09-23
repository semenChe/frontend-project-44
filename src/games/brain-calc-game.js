import gameEngine from '../index.js';
import randomNumber from '../helper.js';

const expression = () => {
  const description = 'What is the result of the expression?';
  const dataGeneration = () => {
    const operators = ['+', '-', '*'];
    const randomOperator = operators[randomNumber(0, 3)];
    const firstOperand = randomNumber(0, 11);
    const secondOperand = randomNumber(0, 11);
    const correctAnswerGeneration = () => {
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
    const anotherGameQuestion = `${firstOperand} ${randomOperator} ${secondOperand}`;
    const correctAnswer = correctAnswerGeneration();
    return [anotherGameQuestion, correctAnswer];
  };
  gameEngine(description, dataGeneration);
};
export default expression;
