import { uberPrice, UberModel } from './uber';

// Example from table on https://www.ridesharingdriver.com/how-much-does-uber-cost-uber-fare-estimator
test('pool matches example', () => {
    const uberPool: UberModel = {
        rideType: 'Uber Pool',
        milesFare: 0.80,
        minuteFare: 0.28,
        baseFare: 0,
        bookingFee: 2.30,
        minimumFare: 0
    }

    /*
    Getting the field "total" from the object "uberPrice(uberPool, 2.3, 11)", 
    which is the object returned by the function "uberPrice" 
    when called with parameters "uberPool", "2.3" and "11".
    */
    const price = uberPrice(uberPool, 2.3, 11).total
    expect(price).toBeGreaterThan(7);
    expect(price).toBeLessThan(9);
});