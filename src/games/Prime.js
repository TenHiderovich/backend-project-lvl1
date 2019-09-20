import { getRandomInt, isPrime } from '../unit';

export default () => {
  const question = getRandomInt(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};
