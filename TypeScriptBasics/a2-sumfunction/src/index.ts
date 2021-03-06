import { addNumbers } from './addition';
import { makeTea } from './makeTea';

const logMessage = (message: string): void => {
    console.log(message);
}

const values = [2, 4, 3, 5];
logMessage(`${values[0]} + ${values[1]} = ${addNumbers(values[0], values[1])}`);

logMessage(`${values[2]} + ${values[3]} = ${addNumbers(values[2], values[3])}`);


// Make Tea
logMessage(makeTea('hot'));
logMessage(makeTea('cold'));
// logMessage(makeTea('medium')); // Not Allowed

