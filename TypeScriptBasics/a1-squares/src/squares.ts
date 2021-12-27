
function squares(values: number[]): number[] {

    const results = values.map(x => x * x);

    return results;
}

const squaresv1 = (values: number[]): number[] => {

    return values.map(x => x * x);
}

export { squares, squaresv1 };
