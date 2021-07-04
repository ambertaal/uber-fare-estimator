/* 
Build an Uber far estimator. Uber has a dynamic pricing algorithm.
Can you reverse engineer it using this article?
The user provides the necessary information and you present him with a fare estimate and a breakdown of how it was calculated! */

/* 
The old fare calculation – Limited use as of 2021
Base Fare + (Cost per minute * time in ride) + (Cost per mile * ride distance) + Booking Fee + Other Fees = Your Fare
*/

/*
‘Upfront’ pricing model that is a more complicated algorithm based on willingness to pay and other factors.

New fare calculation is:
Base Fare + (Cost per minute * time in ride) + (Cost per mile * ride distance) + Booking Fee + Other Fees = Your Fare
If yourFare < Minimum Fare then, minFare.
*/

// input of user. After you input your destination, the app will display a fare estimate for each service.

const currentCity = process.argv[2]                 // current city
const destinationCity = process.argv[3]             // destination city
const drivingMiles = process.argv[4]
const drivingMinutes = process.argv[5]

// calculating the fare estimate of Uber Pool

const poolCostPerMile = 0.80
const poolCostPerMinute = 0.28
const poolBaseFare = 0
const poolBookingFee = 2.30
const poolMinFare = 0

let uberPoolFare = poolBaseFare + (poolCostPerMinute * drivingMinutes) + (poolCostPerMile * drivingMiles) + poolBookingFee

if (uberPoolFare < poolMinFare) {
    uberPoolFare = poolMinFare
}

// calculating the fare estimate of Uber X
const xCostPerMile = 0.80
const xCostPerMinute = 0.28
const xBaseFare = 0
const xBookingFee = 3
const xMinFare = 6.50

let uberXFare = xBaseFare + (xCostPerMinute * drivingMinutes) + (xCostPerMile * drivingMiles) + xBookingFee

if (uberXFare < xMinFare) {
    uberXFare = xMinFare
}

// Uber Comfort costs
const costPerMile = 0.92
const costPerMinute = 0.38
const baseFare = 0
const bookingFee = 3
const minFare = 10

// Uber XL costs
const costPerMile = 1.61
const costPerMinute = 0.31
const baseFare = 1
const bookingFee = 3
const minFare = 9

// Uber Select costs
const costPerMile = 1.9
const costPerMinute = 0.61
const baseFare = 5
const bookingFee = 3
const minFare = 12

// Uber Black costs
const costPerMile = 2.92
const costPerMinute = 0.71
const baseFare = 8.75
const bookingFee = 0
const minFare = 15.75

// Black SUV costs
const costPerMile = 3.76
const costPerMinute = 0.75
const baseFare = 15.75
const bookingFee = 0
const minFare = 25.75

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

console.log(`
**************
Fare estimates for each service 
**************
Uber Pool: ${uberPoolFare}
Uber X: ${uberXFare}
`)