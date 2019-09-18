import readlineSync from 'readline-sync';
import calcGame from './games/calcGame';
import evenOrOdd from './games/gameAnswer';
import gcd from './games/gcdGame';

export default (gameType) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);

  const iter = (count) => {
    if (count >= 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const game = {
      evenOrOdd,
      calcGame,
      gcd,
    };

    const { question, correctAnswer } = game[gameType]();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ').toLowerCase();

    if (String(correctAnswer) === String(answer)) {
      console.log('Correct!');
      iter(count + 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
    }
  };

  return iter(0);
};
