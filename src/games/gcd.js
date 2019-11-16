import gameEngine from '..';

import getRandomInt from '../getRandomInt';

const getGreatestCommonDivisor = (a, b) => {
  if (b > a) {
    return getGreatestCommonDivisor(b, a);
  }

  if (!b) return a;

  return getGreatestCommonDivisor(b, a % b);
};

const introductoryQuestion = 'Find the greatest common divisor of given numbers';

const getDataForGame = () => {
  const randomValueFirst = getRandomInt(1, 100);
  const randomValueSecond = getRandomInt(1, 100);
  const question = `${randomValueFirst}  ${randomValueSecond}`;
  const correctAnswer = String(getGreatestCommonDivisor(randomValueFirst, randomValueSecond));

  return {
    question,
    correctAnswer,
  };
};

export default () => gameEngine(introductoryQuestion, getDataForGame);
