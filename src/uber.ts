/* 
Codaisseur - Leren programmeren - assignment: 
Build an Uber far estimator. Uber has a dynamic pricing algorithm.
Can you reverse engineer it using this article? https://www.ridesharingdriver.com/how-much-does-uber-cost-uber-fare-estimator 
*/

// English error messages.
const errorMessage = {
    forgotMiles: 'Error: You forgot to fill in the amount of Miles to drive',
    forgotMinutes: 'Error: You forgot to fill in the amount of minutes to drive',
    forgotMilesMinutes: 'Error: You forgot to fill in the amount of Miles and minutes!',
    forgotNothing: 'Calculating!'
}

// Checks the user input and logs error messages based on the available user input. Exits program if one or more of the user inputs is not available.
export function checkInput(miles: number, minutes: number) {
    if (!miles && !minutes) {
        console.log(errorMessage.forgotMilesMinutes)
        process.exit(1)
    } else if (!miles) {
        console.log(errorMessage.forgotMiles);
        process.exit(1)
    } else if (!minutes) {
        console.log(errorMessage.forgotMinutes);
        process.exit(1)
    } else {
        console.log(errorMessage.forgotNothing);
    }
}

// An UberModel object defines the pricing parameters of an Uber ride type. 
export interface UberModel {
    rideType: string;
    milesFare: number;
    minuteFare: number;
    baseFare: number;
    bookingFee: number;
    minimumFare: number;
}

export const uberModels: Array<UberModel> = [
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
]

// The uberPrice function calculates the estimated price via the new formula and prints the Uber receipt.
export function uberPrice(uberModel: UberModel, miles: number, minutes: number) {
    let result = uberModel.baseFare + (uberModel.milesFare * miles) + (uberModel.minuteFare * minutes) + uberModel.bookingFee;

    if (result < uberModel.minimumFare) {
        result = uberModel.minimumFare;
    }

    const bonnetje = `
******************
Your Uber receipt
******************
Ride type:          ${uberModel.rideType}

Miles to drive:     ${miles} miles 
Minutes to drive:   ${minutes} minutes
Mile fare:          \$ ${Number(uberModel.milesFare).toFixed(2)}
Minute fare         \$ ${Number(uberModel.minuteFare).toFixed(2)}

Total Mile fare:    \$ ${Number(uberModel.milesFare * miles).toFixed(2)} (Miles to drive x Miles fare)
Total Minute fare   \$ ${Number(uberModel.minuteFare * minutes).toFixed(2)} (Minutes to drive x Minute fare)

Minimum fare:       \$ ${Number(uberModel.minimumFare).toFixed(2)}
Booking fee:        \$ ${Number(uberModel.bookingFee).toFixed(2)}

TOTAL:              \$ ${Number(result).toFixed(2)}
`
    return { total: result, receipt: bonnetje };
}