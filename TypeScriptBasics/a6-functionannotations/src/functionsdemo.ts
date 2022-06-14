
const add = (value1: number, value2: number): number => {
    return value1 + value2;
}

const substract = (value1: number, value2: number): number => {
    return value1 - value2;
}

function divide(value1: number, value2: number): number {
    return value1 / value2;
}

const multiply = (value1: number, value2: number): number => {
    return value1 * value2;
}

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): never => {
    throw new Error(message);
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

logWeather(forecast);

const logWeatherv1 = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
}

logWeatherv1(forecast);