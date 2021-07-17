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
var drivingMiles = process.argv[2]; // user input 2.3
var drivingMinutes = process.argv[3]; // user input 11
// console.logging the values so we can see some output
console.log(process.argv);
var a = {
    rideType: 'Uber Pool',
    milesFare: 0.80,
    minuteFare: 0.28,
    baseFare: 0,
    bookingFee: 2.30,
    minimumFare: 0
};
var b = {
    rideType: 'Uber X',
    milesFare: 0.80,
    minuteFare: 0.28,
    baseFare: 0,
    bookingFee: 3,
    minimumFare: 6.50
};
var c = {
    rideType: 'Uber Comfort',
    milesFare: 0.92,
    minuteFare: 0.38,
    baseFare: 0,
    bookingFee: 2,
    minimumFare: 10
};
// Declaring the function with parameter list
// Including if statement
function uberPrice(uberModel, minutes, miles) {
    var result = (uberModel.baseFare + (uberModel.milesFare * miles) + (uberModel.minuteFare * minutes) + uberModel.bookingFee);
    if (result < uberModel.minimumFare) {
        result = uberModel.minimumFare;
    }
    else {
        result = result;
    }
    console.log("\n    ******************\n    Your Uber receipt\n    ******************\n    Ride type:          " + uberModel.rideType + "\n\n    Miles to drive:     " + (miles + ' ' + 'miles') + " \n    Minutes to drive:   " + (minutes + ' ' + 'minutes') + "\n    Mile fare:          " + ('$ ' + uberModel.milesFare) + "\n    Minute fare         " + ('$ ' + uberModel.minuteFare) + "\n    \n    Total Mile fare:    " + ('$ ' + Math.round(uberModel.milesFare * miles) + ' (Miles to drive x Miles fare)') + "\n    Total Minute fare   " + ('$ ' + Math.round(uberModel.minuteFare * minutes) + ' (Minutes to drive x Minute fare)') + "\n    \n    Minimum fare:       " + ('$ ' + uberModel.minimumFare) + "\n    Booking fee:        " + ('$ ' + uberModel.bookingFee) + "\n    \n    TOTAL:              " + ('$ ' + Math.round(result)) + "\n    ");
    // return the result of the calculation
    return result;
}
// Make the function reusable
// Call the function multiple times
// A
// Call the function with arguments
// Assign the value that is returned to a variable
var priceA = uberPrice(a, drivingMinutes, drivingMiles);
// B
// Call the function with arguments
// Assign the value that is returned to a variable
var priceB = uberPrice(b, drivingMinutes, drivingMiles);
// C
// Call the function with arguments
// Assign the value that is returned to a variable
var priceC = uberPrice(c, drivingMinutes, drivingMiles);
if (!drivingMiles) {
    console.log("Error: You forgot to fill in the amount of Miles to drive");
}
if (!drivingMinutes) {
    console.log("Error: You forgot to fill in the amount of minutes to drive");
}
