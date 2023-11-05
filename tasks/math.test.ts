import { expect } from 'chai';
import { sum } from '../src/math';

describe('Math functions', () => {
    it('should calculate the sum of all numbers', () => {
        expect(sum([1989, 101, 20])).to.be.equal(2110);
        expect(sum([999, 2, 8])).to.be.equal(1009);
        expect(sum([-2, 2])).to.be.equal(0);
    });
})
