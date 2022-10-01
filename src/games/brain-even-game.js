import gameEngine from '../index.js';
import randomNumber from '../helper.js';

const description = "Answer 'yes' if number even otherwise answer 'no'.";
const isEven = (number) => number % 2 === 0;
const getQuestionAndAnswer = () => {
  const anotherGameQuestion = randomNumber(1, 100);
  const expectedAnswer = isEven(anotherGameQuestion) ? 'yes' : 'no';
  return [anotherGameQuestion, expectedAnswer];
};
export default () => {
  gameEngine(description, getQuestionAndAnswer);
};
