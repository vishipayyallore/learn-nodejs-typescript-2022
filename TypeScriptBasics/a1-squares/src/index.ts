import { squares, squaresv1 } from "./squares";

const logMessage = (message: string): void => {
    console.log(message);
}

const values = [2, 3, 4, 5];
logMessage(`square(${values}) = ${squares(values)}`);

logMessage('Hello World !! $$ ## %%');