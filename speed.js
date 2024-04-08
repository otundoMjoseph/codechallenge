function checkSpeed(speed) {
    if (speed <= 70) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - 70) / 5);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log("Points:", demeritPoints);
        }
    }
}

// Get user input (using prompt for simplicity)
const speed = parseInt(prompt("Enter the speed of the car (km/h): "));

// Check and print results
checkSpeed(speed);