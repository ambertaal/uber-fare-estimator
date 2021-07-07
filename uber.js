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

// Rates A
const rideTypeA = 'Uber Pool'
const milesFareA = 0.80
const minuteFareA = 0.28
const baseFareA = 0
const bookingFeeA = 2.30
const minimumFareA = 0

// Rates B
const rideTypeB = 'Uber X'
const milesFareB = 0.80
const minuteFareB = 0.28
const baseFareB = 0
const bookingFeeB = 3
const minimumFareB = 6.50

// Rates C
const rideTypeC = 'Uber Comfort'
const milesFareC = 0.92
const minuteFareC = 0.38
const baseFareC = 0
const bookingFeeC = 2
const minimumFareC = 10

// Declaring the function with parameter list
// Including if statement

function uberPrice(rideType, minimumFare, baseFare, milesFare, minuteFare, bookingFee, minutes, miles) {
    let result = (baseFare + (milesFare * miles) + (minuteFare * minutes) + bookingFee);
    if (result < minimumFare) {
        result = minimumFare;
    } else {
        result = result;
    }
    // return the result of the calculation
    return result;
}

const uberReceipt = function (rideType, minimumFare, baseFare, milesFare, minuteFare, bookingFee, minutes, miles) {
    let receipt = "Fare estimates for" + " " + rideType
        + "Base Fare:" + " " + "$" + baseFare
        + "Mile fare:" + " " + "$" + milesFare
    return receipt;
}

// Make the function reusable
// Call the function multiple times

// A
// Call the function with arguments
// Assign the value that is returned to a variable
const priceA = uberPrice(rideTypeA, minimumFareA, baseFareA, milesFareA, minuteFareA, bookingFeeA, drivingMinutes, drivingMiles)


// B
// Call the function with arguments
// Assign the value that is returned to a variable
const priceB = uberPrice(rideTypeB, minimumFareB, baseFareB, milesFareB, minuteFareB, bookingFeeB, drivingMinutes, drivingMiles)


// C
// Call the function with arguments
// Assign the value that is returned to a variable
const priceC = uberPrice(rideTypeC, minimumFareC, baseFareC, milesFareC, minuteFareC, bookingFeeC, drivingMinutes, drivingMiles)


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

console.log(uberReceipt(rideTypeA, minimumFareA, baseFareA, milesFareA, minuteFareA, bookingFeeA, drivingMinutes, drivingMiles));

console.log(uberReceipt(rideTypeB, minimumFareB, baseFareB, milesFareB, minuteFareB, bookingFeeB, drivingMinutes, drivingMiles));

console.log(uberReceipt(rideTypeC, minimumFareC, baseFareC, milesFareC, minuteFareC, bookingFeeC, drivingMinutes, drivingMiles));