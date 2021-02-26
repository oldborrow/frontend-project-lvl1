import readlineSync from 'readline-sync';

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
}

const prime = (name) => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 100);
        console.log(`Question: ${num}`);
        let userAnswer = readlineSync.question('Your answer: ');
        let trueAnswer = isPrime(num) === true ? 'yes' : 'no';
        if (trueAnswer === userAnswer && (userAnswer === 'yes' || userAnswer === 'no')) {
            console.log('Correct!');
        } else {
            i = -1;
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'`);
            console.log(`Let's try again, ${name}`);
        }
    }
    console.log(`Congratulations, ${name}`);
}

export default prime;