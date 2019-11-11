import readlineSync from 'readline-sync';

const gameTotal = 3;

export default (introductoryQuestion, setDataForGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(introductoryQuestion);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);


  const iter = (startCountValue) => {
    const { question, correctAnswer } = setDataForGame();

    if (startCountValue >= gameTotal) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    console.log(`Question: ${String(question)}`);

    const answer = readlineSync.question('Your answer: ').toLowerCase();

    if (correctAnswer === String(answer)) {
      console.log('Correct!');
      iter(startCountValue + 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
    }
  };

  iter(0);
};
