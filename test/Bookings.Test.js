import { expect } from 'chai';
import Bookings from '../src/services/Bookings';

describe('Bookings', () => {

    it('starts with 3 bookings', () => {
        const bookings = new Bookings();

        bookings.all().then(results => {
            expect(results.length).to.equal(3);
        })
    });

});
