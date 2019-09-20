import { getRandomInt } from '../unit';

export default () => {
  const randomIntFirst = getRandomInt(1, 100);
  const randomIntSecond = getRandomInt(1, 100);

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

  const randomExp = getRandomInt(1, 3);
  const correctAnswer = exp[randomExp];
  const question = expStr[randomExp];

  return {
    question,
    correctAnswer,
  };
};
