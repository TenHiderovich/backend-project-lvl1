import { getRandomInt } from '../unit';

export default () => {
  const randomIntFirst = getRandomInt(100);
  const randomIntSecond = getRandomInt(100);

  const exp = {
    1: randomIntFirst + randomIntSecond,
    2: randomIntFirst - randomIntSecond,
    3: randomIntFirst * randomIntSecond,
  };

  const expStr = {
    1: `${randomIntFirst} + ${randomIntSecond}`,
    2: `${randomIntFirst} - ${randomIntSecond}`,
    3: `${randomIntFirst} * ${randomIntSecond}`,
  };

  const randomExp = getRandomInt(3);
  const correctAnswer = exp[randomExp];
  const question = expStr[randomExp];

  return {
    question,
    correctAnswer,
  };
};
