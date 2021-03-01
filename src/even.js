import readlineSync from 'readline-sync';

let i = 0;
const evenGame = (name) => {

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let countOfRightAnswers = 0;
    for (i = 0; i < 3; i++) {
        let number = Math.floor(Math.random() * 100);
        console.log(`Question: ${number}`);

        let trueBooleanAnswer = number % 2 === 0 ? true : false;
        let trueAnswer = trueBooleanAnswer === true ? "yes" : "no";
        const answer = readlineSync.question('Your answer: ');
        const booleanAnswer = answer === 'yes' ? true : false;

        if (booleanAnswer === trueBooleanAnswer && (answer === "yes" || answer === "no")) {
            console.log('Correct!');
            countOfRightAnswers += 1;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
            break;
        }
    }
    if (countOfRightAnswers === 3) {
        console.log(`Congratulations, ${name}!`);
    } else {
        console.log(`Let's try again, ${name}!`);
    }
}

export default evenGame;