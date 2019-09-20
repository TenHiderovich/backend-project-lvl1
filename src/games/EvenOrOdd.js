import { getRandomInt, isEven } from '../unit';

export default () => {
  const randomInt = getRandomInt(100);
  const question = randomInt;
  const correctAnswer = isEven(randomInt) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};
