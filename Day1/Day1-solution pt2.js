const fs = require('fs');

function findCombination() {
    const input = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');
    
    let result = 0;
    let passesZero = 0;
    let dialValue = 50;
 
    for (let i = 0; i < input.length; i++) {
        passesZero = 0;
        const direction = input[i].substring(0, 1);
        const turns = +input[i].substring(1);

        console.log(`Step ${i + 1}: direction=${direction}, turns=${turns}, dialValue=${dialValue}`);
        if (direction === "L") {
            passesZero = Math.abs(Math.floor((dialValue - turns)/ 100));
            dialValue = ((dialValue - turns + 100) % 100 + 100) % 100;
        }

        if (direction === "R") {
            passesZero = Math.abs(Math.floor((dialValue + turns)/ 100));
            dialValue = (dialValue + turns) % 100;
        }

        console.log('passesZero', passesZero);

        if (dialValue === 0) result++;
        if (passesZero > 0) result+= passesZero;
    }

    return 'Combination: ' + result;
}

// Ensure input.txt exists in the same directory as this script
console.log(findCombination());