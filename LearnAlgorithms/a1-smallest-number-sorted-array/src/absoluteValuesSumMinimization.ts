
const absoluteValuesSumMinimization = (numbersArray: number[]): number => {

    const isArrayLengthEven = (numbersArray.length % 2 === 0);
    const midPosition = numbersArray.length / 2;

    return (isArrayLengthEven) ? numbersArray[midPosition - 1] : numbersArray[Math.floor(midPosition)];
};

export { absoluteValuesSumMinimization }
