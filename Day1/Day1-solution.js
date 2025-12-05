const fs = require('fs');

function findCombination() {
    const input = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');
    
    let result = 0;
    let dialValue = 50;
 
    for (let i = 0; i < input.length; i++) {
        const direction = input[i].substring(0, 1);
        const turns = +input[i].substring(1);

        if (direction === "L") {
            dialValue = ((dialValue - turns + 100) % 100 + 100) % 100;
        }

        if (direction === "R") {
            dialValue = (dialValue + turns) % 100;
        }

        if (dialValue === 0) result++;
    }

    return 'Combination: ' + result;
}

console.log(findCombination());