import gameEngine from '..';

import getRandomValue from '../getRandomValue';

const addNumbers = (number1, number2) => number1 + number2;
const subtractNumbers = (number1, number2) => number1 - number2;
const multiplyNumbers = (number1, number2) => number1 * number2;

const introductoryQuestion = 'What is the result of the expression?';

const mathematicalExpressions = {
  '+': addNumbers,
  '-': subtractNumbers,
  '*': multiplyNumbers,
};

const getGameData = () => {
  const firstValue = getRandomValue(1, 100);
  const secondValue = getRandomValue(1, 100);

  const mathematicalExpressionsKeys = Object.keys(mathematicalExpressions);
  const randomValue = getRandomValue(0, mathematicalExpressions.length - 1);
  const mathematicalExpressionKey = mathematicalExpressionsKeys[randomValue];

  const selectedMathematicalExpression = mathematicalExpressions[mathematicalExpressionKey];
  const resultExpression = selectedMathematicalExpression(firstValue, secondValue);

  const correctAnswer = String(resultExpression);
  const question = `${firstValue} ${mathematicalExpressionKey} ${secondValue}`;

  return {
    correctAnswer,
    question,
  };
};

export default () => gameEngine(introductoryQuestion, getGameData);
