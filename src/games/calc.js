import gameEngine from '..';

import getRandomInt from '../getRandomInt';

const introductoryQuestion = 'What is the result of the expression?';

const getDataForGame = () => {
  const randomValueFirst = getRandomInt(1, 100);
  const randomValueSecond = getRandomInt(1, 100);

  const expressions = {
    '+': randomValueFirst + randomValueSecond,
    '-': randomValueFirst - randomValueSecond,
    '*': randomValueFirst * randomValueSecond,
  };

  const mathExpressions = Object.keys(expressions);

  const randomInt = getRandomInt(0, mathExpressions.length - 1);
  const selectedExpression = mathExpressions[randomInt];
  const correctAnswer = String(expressions[selectedExpression]);
  const question = `${randomValueFirst} ${selectedExpression} ${randomValueSecond}`;

  return {
    correctAnswer,
    question,
  };
};

export default () => gameEngine(introductoryQuestion, getDataForGame);
