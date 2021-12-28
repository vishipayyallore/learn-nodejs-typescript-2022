import { absoluteValuesSumMinimization } from './absoluteValuesSumMinimization';

const logMessage = (message: string): void => {
    console.log(message);
}

const performAbsoluteValuesSumMinimization = (values: number[][]) => {

    values.forEach((value, index) => {
        // @ts-ignore
        console.log(`${index + 1}. "${value}" === "${absoluteValuesSumMinimization(value)}"\n`);
    });
};

const values = [
    [2, 4, 7],
    [2, 4, 6, 7],
    [2, 4, 6, 6, 7],
    [2, 4, 6, 6, 7, 8]
];

performAbsoluteValuesSumMinimization(values);


// logMessage(`${absoluteValuesSumMinimization([2, 4, 7])}`);
// logMessage(`${absoluteValuesSumMinimization([2, 4, 6, 7])}`);
// logMessage(`${absoluteValuesSumMinimization([2, 4, 6, 6, 7])}`);
// logMessage(`${absoluteValuesSumMinimization([2, 4, 6, 6, 7, 8])}`);
