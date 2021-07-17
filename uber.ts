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

// console.logging the values so we can see some output
console.log(process.argv);

// Rates 

const a = {
    rideType: 'Uber Pool',
    milesFare: 0.80,
    minuteFare: 0.28,
    baseFare: 0,
    bookingFee: 2.30,
    minimumFare: 0
};

const b = {
    rideType: 'Uber X',
    milesFare: 0.80,
    minuteFare: 0.28,
    baseFare: 0,
    bookingFee: 3,
    minimumFare: 6.50
};

const c = {
    rideType: 'Uber Comfort',
    milesFare: 0.92,
    minuteFare: 0.38,
    baseFare: 0,
    bookingFee: 2,
    minimumFare: 10
}

// Declaring the function with parameter list
// Including if statement

function uberPrice(rideType, minimumFare, baseFare, milesFare, minuteFare, bookingFee, minutes, miles) {
    let result = (baseFare + (milesFare * miles) + (minuteFare * minutes) + bookingFee);

    if (result < minimumFare) {
        result = minimumFare;
    } else {
        result = result;
    }

    console.log(`
    ******************
    Your Uber receipt
    ******************
    Ride type:          ${rideType}

    Miles to drive:     ${miles + ' ' + 'miles'} 
    Minutes to drive:   ${minutes + ' ' + 'minutes'}
    Mile fare:          ${'$ ' + milesFare}
    Minute fare         ${'$ ' + minuteFare}
    
    Total Mile fare:    ${'$ ' + Math.round(milesFare * miles) + ' (Miles to drive x Miles fare)'}
    Total Minute fare   ${'$ ' + Math.round(minuteFare * minutes) + ' (Minutes to drive x Minute fare)'}
    
    Minimum fare:       ${'$ ' + minimumFare}
    Booking fee:        ${'$ ' + bookingFee}
    
    TOTAL:              ${'$ ' + Math.round(result)}
    `)

    // return the result of the calculation
    return result;
}

// Make the function reusable
// Call the function multiple times

// A
// Call the function with arguments
// Assign the value that is returned to a variable
const priceA = uberPrice(a.rideType, a.minimumFare, a.baseFare, a.milesFare, a.minuteFare, a.bookingFee, drivingMinutes, drivingMiles)

// B
// Call the function with arguments
// Assign the value that is returned to a variable
const priceB = uberPrice(b.rideType, b.minimumFare, b.baseFare, b.milesFare, b.minuteFare, b.bookingFee, drivingMinutes, drivingMiles)


// C
// Call the function with arguments
// Assign the value that is returned to a variable
const priceC = uberPrice(c.rideType, c.minimumFare, c.baseFare, c.milesFare, c.minuteFare, c.bookingFee, drivingMinutes, drivingMiles)

if (!drivingMiles) {
    console.log("Error: You forgot to fill in the amount of Miles to drive")
}

if (!drivingMinutes) {
    console.log("Error: You forgot to fill in the amount of minutes to drive")
}