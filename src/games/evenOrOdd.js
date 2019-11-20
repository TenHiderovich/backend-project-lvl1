import gameEngine from '..';

import getRandomValue from '../getRandomValue';

const isEven = (int) => int % 2 === 0;

const introductoryQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const question = getRandomValue(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

export default () => gameEngine(introductoryQuestion, getGameData);
