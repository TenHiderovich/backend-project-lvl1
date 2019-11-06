import gameEngine from '..';

import getRandomInt from '../getRandomInt';

const getRandomProgressList = (length, start, diff) => {
  const progressList = [];

  for (let i = 0; i < length; i += 1) {
    progressList[i] = start + diff * i;
  }

  return progressList;
};

const introductoryQuestion = 'What number is missing in the progression?';

export default () => {
  const listLength = 10;
  const rundomElementPosition = getRandomInt(1, listLength);
  const diff = getRandomInt(1, 10);
  const startList = getRandomInt(1, 10);
  const list = getRandomProgressList(listLength, startList, diff);

  list.splice(rundomElementPosition, 1, '..');

  const correctAnswer = String(startList + diff * rundomElementPosition);
  const question = list;

  gameEngine(introductoryQuestion, question, correctAnswer);
};
