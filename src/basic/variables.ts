let apples: number = 5;
apples = 10;

let colors: string[] = ['r'];

//Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

//function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// annotations
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);

//
