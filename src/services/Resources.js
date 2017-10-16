const resources = [
    { id: 'r1', type: 'wash', name: 'wash 1' },
    { id: 'r2', type: 'wash', name: 'wash 2' },
    { id: 'r3', type: 'wash', name: 'wash 3' },
    { id: 'r4', type: 'wash', name: 'wash 3' },
];

export default class {
    
    all() {
        return new Promise(resolve => resolve(resources));
    }

    find(type) {
        return new Promise((resolve) => {
            const matches = resources.filter(r => r.type === type);
            resolve(matches);
        });
    }
    
}
