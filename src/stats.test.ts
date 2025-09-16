import {average, sum} from "./stats";
import {expect, test} from "./testLib";

test('calculates the sum of all elements of the array',() => {
    const result = sum([1, 2, 3]);
    const expected = 60;

    expect(result).toBe(expected);
});

test('calculates the average of all elements of the array',() => {
    const result = average([1,2,3]);
    const expected = 2;

    expect(result).toBe(expected);
});