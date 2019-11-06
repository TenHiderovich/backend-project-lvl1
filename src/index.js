import readlineSync from 'readline-sync';

// Games
import calcGame from './games/gameCalc';
import evenOrOdd from './games/gameEvenOrOdd';
import gcd from './games/gameGcd';
import progression from './games/gameProgression';
import prime from './games/gamePrime';

const gameTotal = 3;
const games = {
  evenOrOdd,
  calcGame,
  gcd,
  progression,
  prime,
};

export default () => {
  let userName = '';

  const gameEngine = (startCountValue, gameType) => {
    if (startCountValue >= gameTotal) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const { question, correctAnswer } = games[gameType]();
    console.log(`Question: ${String(question)}`);

    const answer = readlineSync.question('Your answer: ').toLowerCase();

    if (correctAnswer === String(answer)) {
      console.log('Correct!');
      gameEngine(startCountValue + 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
    }
  };

  const initGame = (gameType) => {
    const { introductoryQuestion } = games[gameType]();

    console.log('Welcome to the Brain Games!');
    console.log(introductoryQuestion);

    userName = readlineSync.question('May I have your name? ');
    console.log(`Hi ${userName}!`);

    gameEngine(0, gameType);
  };

  return {
    // brainEven: initGame('evenOrOdd'),
    brainCalc: initGame('calcGame'),
    // brainGcd: initGame('gcd'),
    // brainProgression: initGame('progression'),
    // brainPrime: initGame('prime'),
  };
};
