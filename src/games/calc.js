import gameEngine from '..';

import getRandomInt from '../getRandomInt';

const introductoryQuestion = 'What is the result of the expression?';

const setDataForGame = () => {
  const randomIntFirst = getRandomInt(1, 100);
  const randomIntSecond = getRandomInt(1, 100);

  // Вынести на уровень модуля не получится так как randomIntFirst и randomIntSecond
  // зависят от контекста функции
  const expressions = {
    '+': randomIntFirst + randomIntSecond,
    '-': randomIntFirst - randomIntSecond,
    '*': randomIntFirst * randomIntSecond,
  };

  const mathExpressions = Object.keys(expressions);

  const randomInt = getRandomInt(0, mathExpressions.length - 1);
  const selectedExpression = mathExpressions[randomInt];
  const correctAnswer = String(expressions[selectedExpression]);
  const question = `${randomIntFirst} ${selectedExpression} ${randomIntSecond}`;

  return {
    correctAnswer,
    question,
  };
};

export default () => gameEngine(introductoryQuestion, setDataForGame);
