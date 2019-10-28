const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandomProgressList = (length) => {
  const randomInt = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const list = [randomInt];

  for (let i = 1; i < length; i += 1) {
    list[i] = list[i - 1] + step;
  }

  return list;
};


export default () => {
  const rundomElementPosition = getRandomInt(1, 10);
  const list = getRandomProgressList(10);
  const splicedElement = list.splice(rundomElementPosition, 1, '..');
  const correctAnswer = splicedElement[0];
  const question = list;
  const introductoryQuestion = 'What number is missing in the progression?';

  return {
    introductoryQuestion,
    question,
    correctAnswer,
  };
};