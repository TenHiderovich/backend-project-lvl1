
import getRandomInt from '../getRandomInt';

const introductoryQuestion = 'What is the result of the expression?';

export default () => {
  const randomIntFirst = getRandomInt(1, 100);
  const randomIntSecond = getRandomInt(1, 100);

  const expressions = {
    '+': randomIntFirst + randomIntSecond,
    '-': randomIntFirst - randomIntSecond,
    '*': randomIntFirst * randomIntSecond,
  };

  const expressionsString = {
    '+': `${randomIntFirst} + ${randomIntSecond}`,
    '-': `${randomIntFirst} - ${randomIntSecond}`,
    '*': `${randomIntFirst} * ${randomIntSecond}`,
  };

  const mathExpressions = ['+', '-', '*'];

  const randomInt = getRandomInt(1, mathExpressions.length);
  const selectedExpression = mathExpressions[randomInt];
  const correctAnswer = expressions[selectedExpression];
  const question = expressionsString[selectedExpression];

  return {
    introductoryQuestion,
    question,
    correctAnswer,
  };
};
