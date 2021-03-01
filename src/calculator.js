import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + min;
}

const calculator = (name) => {
  let countOfRightAnswers = 0;
  console.log('What is the result of the expression?');
  let i = 0;
  for (i = 0; i < 3; i += 1) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);

    const ind = getRandomInt(1, 4);

    let sign = '';
    let result = 0;

    if (ind === 1) {
      sign = '*';
      console.log(`Question: ${num1} ${sign} ${num2}`);
      result = num1 * num2;
    }
    if (ind === 2) {
      sign = '-';
      console.log(`Question: ${num1} ${sign} ${num2}`);
      result = num1 - num2;
    }
    if (ind === 3) {
      sign = '+';
      console.log(`Question: ${num1} ${sign} ${num2}`);
      result = num1 + num2;
    }
    const answer = readlineSync.question('Your answer: ');

    if (answer === `${result}`) {
      console.log('Correct!');
      countOfRightAnswers += 1;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${result}'.`,
      );
      break;
    }
  }
  if (countOfRightAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default calculator;
