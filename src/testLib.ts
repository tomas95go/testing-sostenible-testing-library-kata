export function expect<T>(expected: T) {
    return {
        toBe(result: T) {
            if (expected !== result) {
                throw new Error(`It is false!. ${result} is not ${expected}`);
            }
        }
    }
}

export async function test(description: string, callback: () => void) {
    try {
        await callback();
        console.log(`✅  ${description}`);
    } catch (e) {
        console.log(`❌  ${description}`);
    }
}

export const it = test;

export function describe(description: string, callback: () => void) {
    console.log(description);
    callback();
}