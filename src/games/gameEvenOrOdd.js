import gameEngine from '..';

import getRandomInt from '../getRandomInt';

const isEven = (int) => int % 2 === 0;

const introductoryQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = String(isEven(question) ? 'yes' : 'no');

  gameEngine(introductoryQuestion, question, correctAnswer);
};
