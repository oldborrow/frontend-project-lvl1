import readlineSync from 'readline-sync';

let i = 0;
const evenGame = (name) => {
    let completed = false;
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (i = 0; i < 3; i++) {
        let number = Math.floor(Math.random() * 100);
        console.log(`Question: ${number}`);

        let trueBooleanAnswer = number % 2 === 0 ? true : false;
        let trueAnswer = trueBooleanAnswer === true ? "yes" : "no";
        const answer = readlineSync.question('Your answer: ');
        const booleanAnswer = answer === 'yes' ? true : false;

        if (booleanAnswer === trueBooleanAnswer && (answer === "yes" || answer === "no")) {
            console.log('Correct!')
            completed = true;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
            break;
        }
    }
    if (completed) {
        console.log(`Congratulations, ${name}!`);
    } else {
        console.log(`Let's try again, ${name}!`);
    }
}

export default evenGame;