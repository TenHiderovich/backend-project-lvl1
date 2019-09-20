import { getRandomInt, isPrime } from '../unit';

export default () => {
  let question = getRandomInt(100);
  let correctAnswer = null;

  if (question < 2) {
    question = 2;
  }

  if (isPrime(question)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return {
    question,
    correctAnswer,
  };
};
