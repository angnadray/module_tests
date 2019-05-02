/* JavaScript Test */

// 1

let cityName = [ "New York", "Berlin", "Los Angeles" ];


// 2
let i;
let int = [ 32, 12, 68 ];
let sum = 0;

for (i = 0; i < 3; i++) {
    sum = int[i] + 3;
    console.log(`${int[i]} + 3 = ${sum}`);
}

// 3

let firstName = "John";
let lastName = "Constantine";
console.log(`${lastName}, ${firstName}`);

// 4

let numOne = 456;

if (numOne % 100 === 0) {
    console.log(true);
} 
else {
    console.log(false);
}

// 5

// 6


for (i = 0; i <= 7; i++) {
    if (i === 0) {
        console.log(`${i} is neither even nor odd`);
    }
    else if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`);
    }
}

// 7

let totalAngle = 180;
let angle1 = 30;
let angle2 = 60;
let angle3 = totalAngle - (angle1 + angle2);

/* console.log(angle3); */ // 90

if (angle3 < 90) {
    console.log(`less than ${angle3}° makes this and acute angle`);
}
else if (angle3 === 90) {
    console.log(`A right angle is exactly ${angle3}°`);
}
else console.log(`${angle3} is an obtuse angle`);

// 8

let name = 'maria jane jones';
let name2 = name.split(' ');
console.log(name2);


// 9

let string1 = 'The string will be a sentence';
let newString = string1.split(' ');
let count = newString.length;
console.log(`this sentence has ${count} words`);

// 10

let items = [5, 6, 7, 8];
let res = 0;

for (i = 0; i < 4; i++) {
    res = items[i] * 4;
    console.log(`${items[i]} * 4 = ${res}`);
}
