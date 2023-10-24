import { sum } from '../source/math';

describe('Math functions', () => {
    it('should calculate the sum of all numbers', () => {
        expect(sum(1989, 101, 20)).toBe(2020);
        expect(sum(999, 2, 8)).toBe(107);
        expect(sum(-2, 2)).toBe(0);
    });
})
