import {average, sum} from "./stats";
import {expect} from "./testLib";

const sumResult = sum([1,2,3]);
const sumExpected = 6;

expect(sumResult).toBe(sumExpected);

const averageResult = average([1,2,3]);
const averageExpected = 2;

expect(averageResult).toBe(averageExpected);