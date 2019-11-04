import readlineSync from 'readline-sync';

// Games
import calcGame from './games/gameCalc';
import evenOrOdd from './games/gameEvenOrOdd';
import gcd from './games/gameGcd';
import progression from './games/gameProgression';
import prime from './games/gamePrime';

export default (gameType) => {
  const games = {
    evenOrOdd,
    calcGame,
    gcd,
    progression,
    prime,
  };

  const { introductoryQuestion } = games[gameType]();

  console.log('Welcome to the Brain Games!');
  console.log(introductoryQuestion);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);

  const iter = (count) => {
    const gameTotal = 3;

    if (count >= gameTotal) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const { question, correctAnswer } = games[gameType]();
    console.log(`Question: ${String(question)}`);

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
