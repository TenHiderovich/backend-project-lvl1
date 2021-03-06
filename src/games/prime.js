import gameEngine from '..';

import getRandomValue from '../getRandomValue';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

const introductoryQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const question = getRandomValue(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

export default () => gameEngine(introductoryQuestion, getGameData);
