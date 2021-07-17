/*
Codaisseur - Leren programmeren - assignment:
Build an Uber far estimator. Uber has a dynamic pricing algorithm.
Can you reverse engineer it using this article? https://www.ridesharingdriver.com/how-much-does-uber-cost-uber-fare-estimator
*/
// Inputs of the user are stored in two variables.
var drivingMiles = Number(process.argv[2]); // user input 2.3 miles
var drivingMinutes = Number(process.argv[3]); // user input 11 minutes
// English error messages.
var errorMessage = {
    forgotMiles: 'Error: You forgot to fill in the amount of Miles to drive',
    forgotMinutes: 'Error: You forgot to fill in the amount of minutes to drive',
    forgotMilesMinutes: 'Error: You forgot to fill in the amount of Miles and minutes!',
    forgotNothing: 'Calculating!'
};
// Checks the user input and logs error messages based on the available user input. Exits program if one or more of the user inputs is not available.
function checkInput(minutes, miles) {
    if (!drivingMinutes && !drivingMiles) {
        console.log(errorMessage.forgotMilesMinutes);
        process.exit(1);
    }
    else if (!drivingMiles) {
        console.log(errorMessage.forgotMiles);
        process.exit(1);
    }
    else if (!drivingMinutes) {
        console.log(errorMessage.forgotMinutes);
        process.exit(1);
    }
    else {
        console.log(errorMessage.forgotNothing);
    }
}
checkInput(drivingMiles, drivingMinutes);
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
// The uberPrice function calculates the estimated price via the new formula and prints the Uber receipt.
function uberPrice(uberModel, minutes, miles) {
    var result = uberModel.baseFare + (uberModel.milesFare * miles) + (uberModel.minuteFare * minutes) + uberModel.bookingFee;
    if (result < uberModel.minimumFare) {
        result = uberModel.minimumFare;
    }
    console.log("\n    ******************\n    Your Uber receipt\n    ******************\n    Ride type:          " + uberModel.rideType + "\n\n    Miles to drive:     " + miles + " miles \n    Minutes to drive:   " + minutes + " minutes\n    Mile fare:          $ " + uberModel.milesFare + "\n    Minute fare         $ " + uberModel.minuteFare + "\n    \n    Total Mile fare:    $ " + Math.round(uberModel.milesFare * miles) + " (Miles to drive x Miles fare)\n    Total Minute fare   $ " + Math.round(uberModel.minuteFare * minutes) + " (Minutes to drive x Minute fare)\n    \n    Minimum fare:       $ " + uberModel.minimumFare + "\n    Booking fee:        $ " + uberModel.bookingFee + "\n    \n    TOTAL:              $ " + Math.round(result) + "\n    ");
    return result;
}
// Prints the Uber receipts per Uber Model.
uberPrice(a, drivingMinutes, drivingMiles);
uberPrice(b, drivingMinutes, drivingMiles);
uberPrice(c, drivingMinutes, drivingMiles);
