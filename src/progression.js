import readlineSync from 'readline-sync';

const progression = (name) => {
  let countOfRightAnswers = 0;
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const array = [num1];
    for (let j = 1; j < 10; j += 1) {
      array.push(array[j - 1] + num2);
    }
    const ind = Math.floor(Math.random() * 9);
    const trueAnswer = array[ind];
    array[ind] = '..';
    console.log(`Question: ${array[0]} ${array[1]} ${array[2]} ${array[3]} ${array[4]} ${array[5]} ${array[6]} ${array[7]} ${array[8]} ${array[9]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (`${trueAnswer}` === userAnswer) {
      console.log('Correct!');
      countOfRightAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'`);
      break;
    }
  }
  if (countOfRightAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default progression;
