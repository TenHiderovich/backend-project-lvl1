import readlineSync from 'readline-sync';

// Games
import calcGame from './games/Calc';
import evenOrOdd from './games/EvenOrOdd';
import gcd from './games/Gcd';
import progression from './games/Progression';
import prime from './games/Prime';

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
      progression,
      prime,
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
