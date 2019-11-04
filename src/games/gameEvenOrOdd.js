import getRandomInt from '../getRandomInt';

const isEven = (int) => int % 2 === 0;

export default () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const introductoryQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

  return {
    introductoryQuestion,
    question,
    correctAnswer,
  };
};
