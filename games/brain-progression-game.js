import * as index from '../src/index.js';
import randomNumber from '../src/randomNumber.js';

const progression = () => {
  index.gameStart();
  const name = index.nameCreation();
  index.greetings(name);
  index.whatAreTheRulesOfTheGame('What number is missing in the progression?');
  let nextProgressionValue = 0;
  let increase = 0;
  let hiddenNumber = 0;
  let currentAnswer = '';
  const quest = () => {
    nextProgressionValue = randomNumber(0, 101);
    increase = randomNumber(1, 6);
    hiddenNumber = randomNumber(1, 10);
    const arr = [];
    for (let i = 0; i < 10; i += 1) {
      arr.push(nextProgressionValue);
      nextProgressionValue += increase;
    }
    currentAnswer = arr[hiddenNumber];
    arr[hiddenNumber] = '..';
    return arr.join(' ');
  };
  const correctAnswer = () => String(currentAnswer);
  index.cycle(quest, correctAnswer, name);
};
export default progression;
