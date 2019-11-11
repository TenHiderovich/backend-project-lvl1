import gameEngine from '..';

import getRandomInt from '../getRandomInt';

const getRandomProgression = (progressionLength, start, diff) => {
  const progressList = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progressList[i] = start + diff * i;
  }

  return progressList;
};

const introductoryQuestion = 'What number is missing in the progression?';

const setDataForGame = () => {
  const progressionLength = 10;
  const rundomElementPosition = getRandomInt(0, progressionLength - 1);
  const diff = getRandomInt(1, 10);
  const startProgression = getRandomInt(1, 10);
  const progression = getRandomProgression(progressionLength, startProgression, diff);

  progression.splice(rundomElementPosition, 1, '..');

  const correctAnswer = String(startProgression + diff * rundomElementPosition);
  const question = progression;

  return {
    question,
    correctAnswer,
  };
};

export default gameEngine(introductoryQuestion, setDataForGame);
