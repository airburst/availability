import Resources from './Resources';
import Bookings from './Bookings';

export default class {

    constructor(type, start, end) {     // error trapping and tests
        this.type = type;
        this.start = start || new Date().toISOString();
        this.end = end;
        this.resources = new Resources();
        this.bookings = new Bookings();
    }

    isAvailable = booking => {
        return (booking.end && booking.end <= this.start) || booking.start >= this.end;
    }

    findServices() {
        return new Promise(async (resolve, reject) => {
            try {
                const bookings = await this.bookings.all();     // SHOULD fetch time-bound data
                const noClash = bookings.filter(this.isAvailable);

                const res = await this.resources.find(this.type);
                console.log('RES', res)

                resolve(noClash);
            } catch (err) {
                reject(err);
            }

            // resources.forEach(r => {
            //     r.available = booked
            //         .filter(b => b.rid === r.id)
            //         .map(a => a.available)
            //         .reduce((pre, cur) => (pre && cur), true);
            // });

            // return resources
            //     .filter(a => a.available)
            //     .map(r => ({ name: r.name }));
        });
    };

}
