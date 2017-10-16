const bookings = [
    {
        id: 'b1',
        resourceId: 'r1',
        start: '2017-10-13T09:00:00.000Z',
        end: '2017-10-13T10:00:00.000Z',
        status: 'reserved'
    },
    {
        id: 'b2',
        resourceId: 'r1',
        start: '2017-10-13T11:00:00.000Z',
        end: '2017-10-13T13:00:00.000Z',
        status: 'confirmed'
    },
    {
        id: 'b3',
        resourceId: 'r1',
        start: '2017-10-13T14:00:00.000Z',
        end: '2017-10-13T16:00:00.000Z',
        status: 'confirmed'
    }
];

export default class {
    
    all() {
        return new Promise((resolve) => {
            resolve(bookings);
        });
    }
    
}
