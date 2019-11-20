import gameEngine from '..';

import getRandomValue from '../getRandomValue';

const introductoryQuestion = 'What is the result of the expression?';

const getGameData = () => {
  const firstValue = getRandomValue(1, 100);
  const secondValue = getRandomValue(1, 100);

  const mathematicalExpressions = {
    '+': firstValue + secondValue,
    '-': firstValue - secondValue,
    '*': firstValue * secondValue,
  };

  const mathExpressions = Object.keys(mathematicalExpressions);

  const randomValue = getRandomValue(0, mathExpressions.length - 1);
  const selectedExpression = mathExpressions[randomValue];
  const correctAnswer = String(mathematicalExpressions[selectedExpression]);
  const question = `${firstValue} ${selectedExpression} ${secondValue}`;

  return {
    correctAnswer,
    question,
  };
};

export default () => gameEngine(introductoryQuestion, getGameData);
