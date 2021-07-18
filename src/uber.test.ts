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
    const price = uberPrice(uberPool, 2.3, 11)
    expect(price).toBeLessThan(9);
});