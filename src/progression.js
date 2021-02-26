import readlineSync from 'readline-sync';

const progression = (name) => {
    console.log('What number is missing in the progression?');
    for (let i = 0; i < 3; i++) {
        let num1 = Math.floor(Math.random() * 10);
        let num2 = Math.floor(Math.random() * 10);
        const array = [num1];
        for (let j = 1; j < 10; j++) {
            array.push(array[j - 1] + num2);
        }
        let ind = Math.floor(Math.random() * 9);
        let trueAnswer = array[ind];
        array[ind] = "..";
        console.log(`Question: ${array[0]} ${array[1]} ${array[2]} ${array[3]} ${array[4]} ${array[5]} ${array[6]} ${array[7]} ${array[8]} ${array[9]}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (`${trueAnswer}` === userAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'`);
            console.log(`Let's try again, ${name}!`);
            i = -1;
        }
    }
}

export default progression;