import readlineSync from 'readline-sync';

function sas(a, b) {
  let inFuncA = Math.abs(a);
  let inFuncB = Math.abs(b);
  if (inFuncB > inFuncA) { const temp = inFuncA; inFuncA = inFuncB; inFuncB = temp; }
  while (true) {
    if (inFuncB === 0) return inFuncA;
    inFuncA %= inFuncB;
    if (inFuncA === 0) return inFuncB;
    inFuncB %= inFuncA;
  }
}

const gcd = (name) => {
  let countOfRightAnswers = 0;
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  for (i = 0; i < 3; i += 1) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const trueAnswer = sas(num1, num2);
    if (userAnswer === `${trueAnswer}`) {
      console.log('Correct!');
      countOfRightAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.)`);
      break;
    }
  }
  if (countOfRightAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default gcd;
