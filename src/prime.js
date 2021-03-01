import readlineSync from 'readline-sync';

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
}

const prime = (name) => {
    let countOfRightAnswers = 0;
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 100);
        console.log(`Question: ${num}`);
        let userAnswer = readlineSync.question('Your answer: ');
        let trueAnswer = isPrime(num) === true ? 'yes' : 'no';
        if (trueAnswer === userAnswer && (userAnswer === 'yes' || userAnswer === 'no')) {
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
}

export default prime;