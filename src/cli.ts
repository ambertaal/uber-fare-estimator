import { uberPrice, checkInput, uberModels } from './uber';

// Inputs of the user are stored in two variables.
const drivingMiles = Number(process.argv[2]) // user input 2.3 miles
const drivingMinutes = Number(process.argv[3]) // user input 11 minutes

checkInput(drivingMiles, drivingMinutes)

// Prints the Uber receipts per Uber Model.
for (const uberModel of uberModels) {
    uberPrice(uberModel, drivingMiles, drivingMinutes)
}