import gameEngine from '..';

import getRandomInt from '../getRandomInt';

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

const setDataForGame = () => {
  const question = getRandomInt(2, 100);
  const correctAnswer = String(isPrime(question) ? 'yes' : 'no');

  return {
    question,
    correctAnswer,
  };
};

export default gameEngine(introductoryQuestion, setDataForGame);
