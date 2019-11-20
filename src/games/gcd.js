import gameEngine from '..';

import getRandomValue from '../getRandomValue';

const getGreatestCommonDivisor = (a, b) => {
  if (b > a) {
    return getGreatestCommonDivisor(b, a);
  }

  if (!b) return a;

  return getGreatestCommonDivisor(b, a % b);
};

const introductoryQuestion = 'Find the greatest common divisor of given numbers';

const getGameData = () => {
  const firstValue = getRandomValue(1, 100);
  const secondValue = getRandomValue(1, 100);
  const question = `${firstValue} ${secondValue}`;
  const correctAnswer = String(getGreatestCommonDivisor(firstValue, secondValue));

  return {
    question,
    correctAnswer,
  };
};

export default () => gameEngine(introductoryQuestion, getGameData);
