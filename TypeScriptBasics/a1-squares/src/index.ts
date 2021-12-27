import { squares, squaresV1} from "./squares";

const logMessage = (message: string): void => {
    console.log(message);
}

const values = [2, 3, 4, 5];
logMessage(`Square(${values}) = ${squares(values)}`);

logMessage(`Square V1(${values}) = ${squaresV1(values)}`);

logMessage('Hello World !! $$ ## %% ** &&');