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

const drivingMiles = process.argv[2]
const drivingMinutes = process.argv[3]

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

// calculating the fare estimate of Uber Comfort
const comfortCostPerMile = 0.92
const comfortCostPerMinute = 0.38
const comfortBaseFare = 0
const comfortBookingFee = 3
const comfortMinFare = 10

let uberComfortFare = comfortBaseFare + (comfortCostPerMinute * drivingMinutes) + (comfortCostPerMile * drivingMiles) + comfortBookingFee

if (uberComfortFare < comfortMinFare) {
    uberComfortFare = comfortMinFare
}


// calculating the fare estimate of Uber XL
const xlCostPerMile = 1.61
const xlCostPerMinute = 0.31
const xlBaseFare = 1
const xlBookingFee = 3
const xlMinFare = 9

let uberXLFare = xlBaseFare + (xlCostPerMinute * drivingMinutes) + (xlCostPerMile * drivingMiles) + xlBookingFee

if (uberXLFare < xlMinFare) {
    uberXLFare = xlMinFare
}

// calculating the fare estimate of Uber Select
const selectCostPerMile = 1.9
const selectCostPerMinute = 0.61
const selectBaseFare = 5
const selectBookingFee = 3
const selectMinFare = 12

let uberSelectFare = selectBaseFare + (selectCostPerMinute * drivingMinutes) + (selectCostPerMile * drivingMiles) + selectBookingFee

if (uberSelectFare < selectMinFare) {
    uberSelectFare = selectMinFare
}

// calculating the fare estimate of Uber Black
const blackCostPerMile = 2.92
const blackCostPerMinute = 0.71
const blackBaseFare = 8.75
const blackBookingFee = 0
const blackMinFare = 15.75

let uberBlackFare = blackBaseFare + (blackCostPerMinute * drivingMinutes) + (blackCostPerMile * drivingMiles) + blackBookingFee

if (uberBlackFare < blackMinFare) {
    uberBlackFare = blackMinFare
}

// calculating the fare estimate of Uber Black SUV
const suvCostPerMile = 3.76
const suvCostPerMinute = 0.75
const suvBaseFare = 15.75
const suvBookingFee = 0
const suvMinFare = 25.75

let uberSuvFare = suvBaseFare + (suvCostPerMinute * drivingMinutes) + (suvCostPerMile * drivingMiles) + suvBookingFee

if (uberSuvFare < suvMinFare) {
    uberSuvFare = suvMinFare
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

console.log(`
**************
Fare estimates for each service 
**************
Uber Pool: ${Math.round(uberPoolFare)}
Uber X: ${Math.round(uberXFare)}
Uber Comfort: ${Math.round(uberComfortFare)}
Uber XL: ${Math.round(uberXLFare)}
Uber Select: ${Math.round(uberSelectFare)}
Uber Black: ${Math.round(uberBlackFare)}
Uber Black SUV: ${Math.round(uberSuvFare)}
`)