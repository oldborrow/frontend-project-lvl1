import readlineSync from 'readline-sync';

let i = 0;
const evenGame = (name) => {
    for (i = 0; i < 3; i++) {
        console.log('Answer "yes" if the number is even, otherwise answer "no".');
        let number = Math.floor(Math.random() * 100);
        console.log(`Question: ${number}`);

        let trueBooleanAnswer = number % 2 === 0 ? true : false;
        let trueAnswer = trueBooleanAnswer === true ? "yes" : "no";
        const answer = readlineSync.question('Your answer: ');
        const booleanAnswer = answer === 'yes' ? true : false;

        if (booleanAnswer === trueBooleanAnswer && (answer === "yes" || answer === "no")) {
            console.log('Correct!')
            
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            i = -1;
            
        }
    }
    console.log(`Congratulations, ${name}!`);
}

export default evenGame;