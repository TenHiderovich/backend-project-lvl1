const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

export default () => {
  const randomIntFirst = getRandomInt(1, 100);
  const randomIntSecond = getRandomInt(1, 100);

  const expressions = {
    1: randomIntFirst + randomIntSecond,
    2: randomIntFirst - randomIntSecond,
    3: randomIntFirst * randomIntSecond,
  };

  const expressionsString = {
    1: `${randomIntFirst} + ${randomIntSecond}`,
    2: `${randomIntFirst} - ${randomIntSecond}`,
    3: `${randomIntFirst} * ${randomIntSecond}`,
  };

  const mathExpressions = ['+', '-', '*'];

  const randomInt = getRandomInt(1, mathExpressions.length);
  const correctAnswer = expressions[randomInt];
  const question = expressionsString[randomInt];
  const introductoryQuestion = 'What is the result of the expression?';

  return {
    introductoryQuestion,
    question,
    correctAnswer,
  };
};
