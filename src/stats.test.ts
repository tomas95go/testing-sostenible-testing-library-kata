import {asyncAverage, asyncSum, average, sum} from "./stats";
import {describe, expect, it, test} from "./testLib";

describe('the non async stats functions', () => {
    it('calculates the sum of all elements of the array', () => {
        const result = sum([1, 2, 3]);
        const expected = 6;

        expect(result).toBe(expected);
    });

    it('calculates the average of all elements of the array', () => {
        const result = average([1, 2, 3]);
        const expected = 2;

        expect(result).toBe(expected);
    });
});

describe('the async stats functions', () => {
    it('calculates the sum of all elements of the array async', async () => {
        const result = await asyncSum([1, 2, 3]);
        const expected = 6;

        expect(result).toBe(expected);
    });

    it('calculates the average of all elements of the array async', async () => {
        const result = await asyncAverage([1,2,3]);
        const expected = 2;

        expect(result).toBe(expected);
    });
})