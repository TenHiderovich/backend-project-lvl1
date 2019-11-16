import gameEngine from '..';

import getRandomInt from '../getRandomInt';

const getNod = (a, b) => {
  if (b > a) {
    return getNod(b, a);
  }

  if (!b) return a;

  return getNod(b, a % b);
};

const introductoryQuestion = 'Find the greatest common divisor of given numbers';

const getDataForGame = () => {
  const randomIntFirst = getRandomInt(1, 100);
  const randomIntSecond = getRandomInt(1, 100);
  const question = `${randomIntFirst}  ${randomIntSecond}`;
  const correctAnswer = String(getNod(randomIntFirst, randomIntSecond));

  return {
    question,
    correctAnswer,
  };
};

export default () => gameEngine(introductoryQuestion, getDataForGame);
