const add = (a: number, b: number) => {
    return a + b;
};

const subtract = (a: number, b: number) => {
    a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number) {
    return a * b;
};

const logger = (mes: string) => {
    console.log(mes);
};

const throwErr = (m: string) => {
    throw new Error(m);
};

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({
    date,
    weather
}: {
    date: Date;
    weather: string;
}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(forecast);
