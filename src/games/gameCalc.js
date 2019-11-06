
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

  const mathExpressions = ['+', '-', '*'];

  const randomInt = getRandomInt(1, mathExpressions.length);
  const selectedExpression = mathExpressions[randomInt];
  const correctAnswer = String(expressions[selectedExpression]);
  const question = `${randomIntFirst} ${selectedExpression} ${randomIntSecond}`;

  return {
    introductoryQuestion,
    question,
    correctAnswer,
  };
};
