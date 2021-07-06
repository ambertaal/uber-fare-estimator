/* 
Assignment: 
Build an Uber far estimator. Uber has a dynamic pricing algorithm.
Can you reverse engineer it using this article? https://www.ridesharingdriver.com/how-much-does-uber-cost-uber-fare-estimator 
The user provides the necessary information and you present him with a fare estimate and a breakdown of how it was calculated! 
*/

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

const drivingMiles = process.argv[2] // user input 2.3
const drivingMinutes = process.argv[3] // user input 11

// A
const rideTypeA = 'Uber Pool'
const milesFareA = 0.80
const minuteFareA = 0.28
const baseFareA = 0
const bookingFeeA = 2.30
const minimumFareA = 0

// B
const rideTypeB = 'Uber X'
const milesFareB = 0.80
const minuteFareB = 0.28
const baseFareB = 0
const bookingFeeB = 3
const minimumFareB = 6.50

// C
const rideTypeC = 'Uber Comfort'
const milesFareC = 0.92
const minuteFareC = 0.38
const baseFareC = 0
const bookingFeeC = 2
const minimumFareC = 10

// Getting values back out of functions: return

function uberPrice(rideType, milesFare, minuteFare, bookingFee, minutes, miles) {
    // return the result of the calculation
    return ((milesFare * miles) + (minuteFare * minutes) + bookingFee)
}

// A
// call the function with argument
// assign the value that is returned to a variable
const uberA = uberPrice(rideTypeA, milesFareA, minuteFareA, bookingFeeA, drivingMinutes, drivingMiles)

let uberTotalA = uberA + baseFareA

if (uberTotalA < minimumFareA) {
    uberTotalA = minimumFareA
}

// B

const uberB = uberPrice(rideTypeB, milesFareB, minuteFareB, bookingFeeB, drivingMinutes, drivingMiles, function () {
});

let uberTotalB = uberB + baseFareA

if (uberTotalB < minimumFareB) {
    uberTotalB = minimumFareB
}

// C

const uberC = uberPrice(rideTypeC, milesFareC, minuteFareC, bookingFeeC, drivingMinutes, drivingMiles, function () {
});

let uberTotalC = uberC + baseFareA

if (uberTotalC < minimumFareC) {
    uberTotalC = minimumFareC
}

// console.logging the values so we can see some output
console.log(process.argv);

console.log(`
**************
Your data
**************
Miles to drive: ${drivingMiles}
Minutes to drive: ${drivingMinutes}
`)

if (!drivingMiles) {
    console.log("You forgot to fill in the amount of Miles to drive")
}

if (!drivingMinutes) {
    console.log("You forgot to fill in the amount of minutes to drive")
}

console.log(`
********************************
Fare estimates for ${rideTypeA}
********************************
Base Fare: ${'$' + baseFareA}
Mile fare: ${drivingMiles + ' miles:' + ' ' + '$' + milesFareA}
Minute fare: ${drivingMinutes + ' minutes:' + ' ' + '$' + minuteFareA}
Minimum fare: ${'$' + minimumFareA}
Booking fee: ${'$' + bookingFeeA}
TOTAL: ${'$' + Math.round(uberTotalA)}
    `)

console.log(`
********************************
Fare estimates for ${rideTypeB}
********************************
Base Fare: ${'$' + baseFareB}
Mile fare: ${drivingMiles + ' miles:' + ' ' + '$' + milesFareB}
Minute fare: ${drivingMinutes + ' minutes:' + ' ' + '$' + minuteFareB}
Minimum fare: ${'$' + minimumFareB}
Booking fee: ${'$' + bookingFeeB}
TOTAL: ${'$' + Math.round(uberTotalB)}
    `)


console.log(`
********************************
Fare estimates for ${rideTypeC}
********************************
Base Fare: ${'$' + baseFareC}
Mile fare: ${drivingMiles + ' miles:' + ' ' + '$' + milesFareC}
Minute fare: ${drivingMinutes + ' minutes:' + ' ' + '$' + minuteFareC}
Minimum fare: ${'$' + minimumFareC}
Booking fee: ${'$' + bookingFeeC}
TOTAL: ${'$' + Math.round(uberTotalC)}
    `)