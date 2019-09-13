import readlineSync from 'readline-sync';


const userName = readlineSync.question('May I have your name? ');

console.log(`Hi ${userName}!`);


const getRandomInt = () => Math.floor(Math.random() * (100 - 1) + 1);

const isEven = (int) => int % 2 === 0;

const getAnswer = (count = 0) => {
  const randomInt = getRandomInt();

  if (count >= 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  console.log(`Question: ${randomInt}`);

  const answer = readlineSync.question('Your answer: ').toLowerCase();

  const correct1 = isEven(randomInt) && answer === 'yes';
  const correct2 = !isEven(randomInt) && answer === 'no';
  const oppositeAnswerType = answer === 'yes' ? 'no' : 'yes';

  if (correct1 || correct2) {
    console.log('Correct!');
    getAnswer(count + 1);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${oppositeAnswerType}'`);
    console.log(`Let's try again, ${userName}!`);
  }
};

export default getAnswer;
