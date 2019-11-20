import readlineSync from 'readline-sync';

const gamesCount = 3;

export default (introductoryQuestion, getDataForGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(introductoryQuestion);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);


  const iter = (couner) => {
    const { question, correctAnswer } = getDataForGame();

    if (couner >= gamesCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
      iter(couner + 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
    }
  };

  iter(0);
};
