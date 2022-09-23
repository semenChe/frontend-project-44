import gameEngine from '../index.js';
import randomNumber from '../helper.js';

const progression = () => {
  const description = 'What number is missing in the progression?';
  const lengthOfProgression = 10;
  const dataGeneration = () => {
    let nextProgressionValue = randomNumber(0, 101);
    const increase = randomNumber(1, 6);
    const hiddenNumber = randomNumber(1, lengthOfProgression);
    const arr = [];
    for (let i = 0; i < lengthOfProgression; i += 1) {
      arr.push(nextProgressionValue);
      nextProgressionValue += increase;
    }
    const correctAnswer = String(arr[hiddenNumber]);
    arr[hiddenNumber] = '..';
    const anotherGameQuestion = arr.join(' ');
    return [anotherGameQuestion, correctAnswer];
  };
  gameEngine(description, dataGeneration);
};
export default progression;
