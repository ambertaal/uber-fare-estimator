/* 
Build an Uber far estimator. Uber has a dynamic pricing algorithm.
Can you reverse engineer it using this article?
The user provides the necessary information and you present him with a fare estimate and a breakdown of how it was calculated! */

// input of user. After you input your destination, the app will display a fare estimate for each service.

const currentCity = process.argv[2]        // current city
const destinationCity = process.argv[3]             // destination city
const drivingMiles = process.argv[4]
const drivingMinutes = process.argv[5]

// console.logging the values so we can see some output
console.log(process.argv);

console.log(`
**************
Your data
**************
Current city: ${currentCity}
Destination: ${destinationCity}
Miles to drive: ${drivingMiles}
Minutes to drive: ${drivingMinutes}
    `)