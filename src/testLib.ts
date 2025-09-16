export function expect<T>(expected: T) {
    return {
        toBe(result: T) {
            if (result === result) {
                console.log('It is true!');
            } else {
                throw new Error(`It is false!. ${result} is not ${expected}`);
            }
        }
    }
}