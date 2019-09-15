import { getRandomInt, isEven } from '../unit';

export default () => {
  const randomInt = getRandomInt(100);
  const question = randomInt;

  let correctAnswer = null;

  if (isEven(randomInt)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return {
    question,
    correctAnswer,
  };
};
