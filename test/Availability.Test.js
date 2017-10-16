import { expect } from 'chai';
import Availability from '../src/services/Availability';

const nearestMinute = (dateIsoString) => {
    return dateIsoString.substr(0,16);
}

describe('Availability Service', () => {

    it('is created with a default type, start and end', () => {
        const availability = new Availability();
        const testStart = new Date().toISOString();

        expect(availability.type).to.equal(undefined);
        expect(nearestMinute(availability.start)).to.equal(nearestMinute(testStart));
        expect(availability.end).to.equal(undefined);
    });

    it('is created with a specified type, start and end', () => {
        const type = 'wash';
        const start = new Date(2017, 9, 1, 11, 0, 0).toISOString();
        const end = new Date(2017, 9, 1, 12, 0, 0).toISOString();
        const availability = new Availability(type, start, end);

        expect(availability.type).to.equal(type);
        expect(availability.start).to.equal(start);
        expect(availability.end).to.equal(end);

        availability.findServices()
            .then(matches => console.log(matches))
            .catch(err => console.log(err));
    });

});
