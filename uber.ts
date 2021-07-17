/* 
Codaisseur - Leren programmeren - assignment: 
Build an Uber far estimator. Uber has a dynamic pricing algorithm.
Can you reverse engineer it using this article? https://www.ridesharingdriver.com/how-much-does-uber-cost-uber-fare-estimator 
*/

// Inputs of the user are stored in two variables.
const drivingMiles = Number(process.argv[2]) // user input 2.3 miles
const drivingMinutes = Number(process.argv[3]) // user input 11 minutes

// English error messages.
const errorMessage = {
    forgotMiles: 'Error: You forgot to fill in the amount of Miles to drive',
    forgotMinutes: 'Error: You forgot to fill in the amount of minutes to drive',
    forgotMilesMinutes: 'Error: You forgot to fill in the amount of Miles and minutes!',
    forgotNothing: 'Calculating!'
}

// Checks the user input and logs error messages based on the available user input. Exits program if one or more of the user inputs is not available.
function checkInput(minutes: number, miles: number) {
    if (!drivingMinutes && !drivingMiles) {
        console.log(errorMessage.forgotMilesMinutes)
        process.exit(1)
    } else if (!drivingMiles) {
        console.log(errorMessage.forgotMiles);
        process.exit(1)
    } else if (!drivingMinutes) {
        console.log(errorMessage.forgotMinutes);
        process.exit(1)
    } else {
        console.log(errorMessage.forgotNothing);
    }
}

checkInput(drivingMiles, drivingMinutes)

// An UberModel object defines the pricing parameters of an Uber ride type. 
interface UberModel {
    rideType: string;
    milesFare: number;
    minuteFare: number;
    baseFare: number;
    bookingFee: number;
    minimumFare: number;
}

const a: UberModel = {
    rideType: 'Uber Pool',
    milesFare: 0.80,
    minuteFare: 0.28,
    baseFare: 0,
    bookingFee: 2.30,
    minimumFare: 0
};

const b: UberModel = {
    rideType: 'Uber X',
    milesFare: 0.80,
    minuteFare: 0.28,
    baseFare: 0,
    bookingFee: 3,
    minimumFare: 6.50
};

const c: UberModel = {
    rideType: 'Uber Comfort',
    milesFare: 0.92,
    minuteFare: 0.38,
    baseFare: 0,
    bookingFee: 2,
    minimumFare: 10
}

// The uberPrice function calculates the estimated price via the new formula and prints the Uber receipt.
function uberPrice(uberModel: UberModel, minutes: number, miles: number) {
    let result = uberModel.baseFare + (uberModel.milesFare * miles) + (uberModel.minuteFare * minutes) + uberModel.bookingFee;

    if (result < uberModel.minimumFare) {
        result = uberModel.minimumFare;
    }

    console.log(`
    ******************
    Your Uber receipt
    ******************
    Ride type:          ${uberModel.rideType}

    Miles to drive:     ${miles} miles 
    Minutes to drive:   ${minutes} minutes
    Mile fare:          \$ ${uberModel.milesFare}
    Minute fare         \$ ${uberModel.minuteFare}
    
    Total Mile fare:    \$ ${Math.round(uberModel.milesFare * miles)} (Miles to drive x Miles fare)
    Total Minute fare   \$ ${Math.round(uberModel.minuteFare * minutes)} (Minutes to drive x Minute fare)
    
    Minimum fare:       \$ ${uberModel.minimumFare}
    Booking fee:        \$ ${uberModel.bookingFee}
    
    TOTAL:              \$ ${Math.round(result)}
    `)

    return result;
}

// Prints the Uber receipts per Uber Model.
uberPrice(a, drivingMinutes, drivingMiles)
uberPrice(b, drivingMinutes, drivingMiles)
uberPrice(c, drivingMinutes, drivingMiles)