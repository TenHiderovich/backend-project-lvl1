const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isEven = (int) => int % 2 === 0;

export default () => {
  const question = getRandomInt(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const introductoryQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

  return {
    introductoryQuestion,
    question,
    correctAnswer,
  };
};
