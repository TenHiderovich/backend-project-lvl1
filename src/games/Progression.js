import { getRandomInt, getRandomProgressList } from '../unit';

export default () => {
  const rundomElementPosition = getRandomInt(1, 10);
  const list = getRandomProgressList(10);
  const splicedElem = list.splice(rundomElementPosition, 1, '..');
  const correctAnswer = splicedElem[0];
  const question = list;

  return {
    question,
    correctAnswer,
  };
};
