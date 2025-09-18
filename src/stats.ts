export function sum(numbers: number[]): number{
    return numbers.reduce((previous, current) => previous + current, 0);
}

export function average(numbers: number[]): number{
    return sum(numbers) / numbers.length;
}

export function asyncSum(numbers: number[]): Promise<number> {
    return Promise.resolve(sum(numbers));
}


export function asyncAverage(numbers: number[]): Promise<number> {
    return Promise.resolve(average(numbers));
}