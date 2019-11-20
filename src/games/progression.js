import gameEngine from '..';

import getRandomValue from '../getRandomValue';

const getProgression = (progressionLength, start, diff) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = start + diff * i;
  }

  return progression;
};

const introductoryQuestion = 'What number is missing in the progression?';
const progressionLength = 10;

const getGameData = () => {
  const rundomElementPosition = getRandomValue(0, progressionLength - 1);
  const diff = getRandomValue(1, 10);
  const startProgression = getRandomValue(1, 10);
  const progression = getProgression(progressionLength, startProgression, diff);

  progression.splice(rundomElementPosition, 1, '..');

  const correctAnswer = String(startProgression + diff * rundomElementPosition);
  const question = progression;

  return {
    question,
    correctAnswer,
  };
};

export default () => gameEngine(introductoryQuestion, getGameData);
