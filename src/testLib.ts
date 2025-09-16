export function expect<T>(expected: T) {
    return {
        toBe(result: T) {
            if (expected !== result) {
                throw new Error(`It is false!. ${result} is not ${expected}`);
            }
        }
    }
}

export function test(description: string, callback: () => void) {
    try {
        callback();
        console.log(`✅  ${description}`);
    } catch (e) {
        console.log(`❌  ${description}`);
    }
}