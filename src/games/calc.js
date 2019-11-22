import gameEngine from '..';

import getRandomValue from '../getRandomValue';

const introductoryQuestion = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getGameData = () => {
  const firstValue = getRandomValue(1, 100);
  const secondValue = getRandomValue(1, 100);

  const operationsKeys = Object.keys(operations);
  const indexOperation = getRandomValue(0, operationsKeys.length - 1);
  const operationKey = operationsKeys[indexOperation];
  const selectedOperation = operations[operationKey];

  const correctAnswer = String(selectedOperation(firstValue, secondValue));
  const question = `${firstValue} ${operationKey} ${secondValue}`;

  return {
    correctAnswer,
    question,
  };
};

export default () => gameEngine(introductoryQuestion, getGameData);
