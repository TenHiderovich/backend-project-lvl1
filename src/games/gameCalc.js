const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

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

  const mathExpressions = ['+', '-', '*'];

  const randomInt = getRandomInt(1, mathExpressions.length);
  const correctAnswer = exp[randomInt];
  const question = expStr[randomInt];

  return {
    question,
    correctAnswer,
  };
};
