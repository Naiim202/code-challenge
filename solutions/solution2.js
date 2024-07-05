function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointThreshold = 12;
    const pointsPerExcess = 5;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / pointsPerExcess);
        if (demeritPoints > demeritPointThreshold) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Example usage:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the speed of the car: ', speed => {
    checkSpeed(parseFloat(speed));
    readline.close();
});
// basics of nodejs