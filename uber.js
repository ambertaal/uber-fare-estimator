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
var uberModels = [
    {
        rideType: 'Uber Pool',
        milesFare: 0.80,
        minuteFare: 0.28,
        baseFare: 0,
        bookingFee: 2.30,
        minimumFare: 0
    },
    {
        rideType: 'Uber X',
        milesFare: 0.80,
        minuteFare: 0.28,
        baseFare: 0,
        bookingFee: 3,
        minimumFare: 6.50
    },
    {
        rideType: 'Uber Comfort',
        milesFare: 0.92,
        minuteFare: 0.38,
        baseFare: 0,
        bookingFee: 2,
        minimumFare: 10
    },
    {
        rideType: 'Uber Black',
        milesFare: 2.92,
        minuteFare: 0.71,
        baseFare: 8.75,
        bookingFee: 0,
        minimumFare: 15.75
    },
];
// The uberPrice function calculates the estimated price via the new formula and prints the Uber receipt.
function uberPrice(uberModel, minutes, miles) {
    var result = uberModel.baseFare + (uberModel.milesFare * miles) + (uberModel.minuteFare * minutes) + uberModel.bookingFee;
    if (result < uberModel.minimumFare) {
        result = uberModel.minimumFare;
    }
    console.log("\n    ******************\n    Your Uber receipt\n    ******************\n    Ride type:          " + uberModel.rideType + "\n\n    Miles to drive:     " + miles + " miles \n    Minutes to drive:   " + minutes + " minutes\n    Mile fare:          $ " + Number(uberModel.milesFare).toFixed(2) + "\n    Minute fare         $ " + Number(uberModel.minuteFare).toFixed(2) + "\n    \n    Total Mile fare:    $ " + Number(uberModel.milesFare * miles).toFixed(2) + " (Miles to drive x Miles fare)\n    Total Minute fare   $ " + Number(uberModel.minuteFare * minutes).toFixed(2) + " (Minutes to drive x Minute fare)\n    \n    Minimum fare:       $ " + Number(uberModel.minimumFare).toFixed(2) + "\n    Booking fee:        $ " + Number(uberModel.bookingFee).toFixed(2) + "\n    \n    TOTAL:              $ " + Number(result).toFixed(2) + "\n    ");
    return result;
}
// Prints the Uber receipts per Uber Model.
for (var _i = 0, uberModels_1 = uberModels; _i < uberModels_1.length; _i++) {
    var uberModel = uberModels_1[_i];
    uberPrice(uberModel, drivingMinutes, drivingMiles);
}
