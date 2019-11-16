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
  const randomValueFirst = getRandomInt(1, 100);
  const randomValueSecond = getRandomInt(1, 100);
  const question = `${randomValueFirst}  ${randomValueSecond}`;
  const correctAnswer = String(getNod(randomValueFirst, randomValueSecond));

  return {
    question,
    correctAnswer,
  };
};

export default () => gameEngine(introductoryQuestion, getDataForGame);
