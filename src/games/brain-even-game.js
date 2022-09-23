import gameEngine from '../index.js';
import randomNumber from '../helper.js';

const parityCheck = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const dataGeneration = () => {
    const anotherGameQuestion = randomNumber(1, 100);
    const isEven = () => anotherGameQuestion % 2 === 0;
    const correctAnswer = isEven(anotherGameQuestion) ? 'yes' : 'no';
    return [anotherGameQuestion, correctAnswer];
  };
  gameEngine(description, dataGeneration);
};
export default parityCheck;
