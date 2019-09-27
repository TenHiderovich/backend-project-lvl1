const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }

  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

export default () => {
  const question = getRandomInt(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const introductoryQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  return {
    introductoryQuestion,
    question,
    correctAnswer,
  };
};
