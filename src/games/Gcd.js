import { getRandomInt, getNOD } from '../unit';

export default () => {
  const randomIntFirst = getRandomInt(100);
  const randomIntSecond = getRandomInt(100);
  const question = `${randomIntFirst}  ${randomIntSecond}`;
  const correctAnswer = getNOD(randomIntFirst, randomIntSecond);

  return {
    question,
    correctAnswer,
  };
};
