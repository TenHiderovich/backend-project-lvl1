const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getNOD = (a, b) => {
  if (b > a) {
    return getNOD(b, a);
  }

  if (!b) return a;

  return getNOD(b, a % b);
};


export default () => {
  const randomIntFirst = getRandomInt(1, 100);
  const randomIntSecond = getRandomInt(1, 100);
  const question = `${randomIntFirst}  ${randomIntSecond}`;
  const correctAnswer = getNOD(randomIntFirst, randomIntSecond);
  const introductoryQuestion = 'Find the greatest common divisor of given numbers';

  return {
    introductoryQuestion,
    question,
    correctAnswer,
  };
};
