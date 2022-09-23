import gameEngine from '../index.js';
import randomNumber from '../helper.js';

const prime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const dataGeneration = () => {
    const anotherGameQuestion = randomNumber(2, 100);
    const isPrime = () => {
      for (let i = 2; i <= anotherGameQuestion / 2; i += 1) {
        if (anotherGameQuestion % i === 0) {
          return false;
        }
      }
      return true;
    };
    const correctAnswer = isPrime(anotherGameQuestion) ? 'no' : 'yes';
    return [anotherGameQuestion, correctAnswer];
  };
  gameEngine(description, dataGeneration);
};
export default prime;
