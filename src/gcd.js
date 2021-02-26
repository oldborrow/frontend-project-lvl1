import readlineSync from 'readline-sync';

function sas(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

const gcd = (name) => {
    console.log("Find the greatest common divisor of given numbers.");
    let i = 0;
    console.log(1)
    for (i = 0; i < 3; i++) {
        let num1 = Math.floor(Math.random() * 100);
        let num2 = Math.floor(Math.random() * 100);
        console.log(2)
        console.log(`Question: ${num1} ${num2}`);
        let userAnswer = readlineSync.question('Your answer: ');
        let trueAnswer = sas(num1, num2);
        if (userAnswer === `${trueAnswer}`) {
            console.log("Correct!");
        } else {
            console.log(4)
            i = -1;
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.)`);
            console.log(`Let's try again, ${name}!`);
        }
        console.log(5)
    }
    console.log(`Congratulations, ${name}!`);
}

export default gcd;