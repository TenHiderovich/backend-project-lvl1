import gameEngine from '..';

import getRandomInt from '../getRandomInt';

const getNOD = (a, b) => {
  if (b > a) {
    return getNOD(b, a);
  }

  if (!b) return a;

  return getNOD(b, a % b);
};

const introductoryQuestion = 'Find the greatest common divisor of given numbers';

export default () => {
  const randomIntFirst = getRandomInt(1, 100);
  const randomIntSecond = getRandomInt(1, 100);
  const question = `${randomIntFirst}  ${randomIntSecond}`;
  const correctAnswer = String(getNOD(randomIntFirst, randomIntSecond));

  gameEngine(introductoryQuestion, question, correctAnswer);
};
