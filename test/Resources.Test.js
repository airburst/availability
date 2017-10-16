import { expect } from 'chai';
import Resources from '../src/services/Resources';

describe('Resources', () => {

    it('starts with 4 resources in total', () => {
        const resources = new Resources();

        resources.all().then(results => {
            expect(results.length).to.equal(4);
        })
    });

    it('starts with 4 "wash" resources', () => {
        const resources = new Resources();

        resources.find('wash').then(results => {
            expect(results.length).to.equal(4);
        })
    });
    
});
