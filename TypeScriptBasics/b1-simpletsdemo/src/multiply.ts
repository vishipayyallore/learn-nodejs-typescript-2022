
// Default EXPORT
export default function multiply(a: number, b: number): number {
    return a * b;
}

// Named EXPORT
export function multiplyByTwo(a: number): number {
    return multiply(a, 2);
}


export interface IMultiply {
    a: number;

    b: number;
}