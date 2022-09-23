import gameEngine from '../index.js';
import randomNumber from '../helper.js';

const gcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const dataGeneration = () => {
    const number1 = randomNumber(1, 101);
    const number2 = randomNumber(1, 101);
    const getGcd = () => {
      for (let i = number1; i > 0; i -= 1) {
        if (number1 % i === 0 && number2 % i === 0) {
          return String(i);
        }
      }
      return NaN;
    };
    const anotherGameQuestion = `${number1} ${number2}`;
    const correctAnswer = getGcd();
    return [anotherGameQuestion, correctAnswer];
  };
  gameEngine(description, dataGeneration);
};
export default gcd;
