
function squares(values: number[]): number[] {

    return values.map(x => x * x);
}

const squaresV1 = (values: number[]): number[] => {

    return values.map(x => x * x);
}

export { squares, squaresV1 };
