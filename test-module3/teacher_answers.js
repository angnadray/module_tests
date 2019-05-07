//1. Write a program to display the city name if the string begins with "Los" or "New" otherwise return "The city name does not begin with Los or New". 

let city = "New York";

let firstThreeChars = city.substring(0, 3).toLowerCase();
if ((firstThreeChars === "new") || (firstThreeChars === "los")) {
    console.log(city);
} else  {
    console.log("The city name does not begin with los or new");
}

//2. Write a program to compute the sum of three elements of a given array of integers. The length of the array must be 3.  
//Example
//[5, 10, 15] ➞ 30
let sum = 0; 
let integersArr = [5, 10, 15, 45];
for (let i = 0; i < integersArr.length; i++) {
    sum = sum + integersArr[i];
}
console.log(sum);


//3. Given two strings, firstName and lastName, return a single string in the format "last, first".
//
//Examples
//"John", "Doe" ➞ "Doe, John"
//"Mary", "Green" ➞ "Green, Mary"

let first = "Mary";
let last = "Green";
let comma = ", ";

// let lastNameComma = `${last}${comma}`;
// let fullNameReverse = lastNameComma.concat(first);
// console.log(fullNameReverse);

let fullName = `${last.trim()}, ${first.trim()}`;
console.log(fullName);

//4. Write a program that takes an integer and returns true if it's divisible by 100, otherwise return false.
//Examples
//1 ➞ false
//1000 ➞ true
//100 ➞ true
let integer = 150;
if (0 === integer) {
    console.log("Integer is 0");
} else if (integer % 100 === 0) {
    console.log(`${true} - integer is divisible by 100`);
} else {
    console.log(`${false} - integer is not divisible by 100`);
}

//5. Write a program that adds a string ending to each member in an array.
//Examples & Expected output
//["clever", "meek", "hurried", "nice"], "ly"
//➞ ["cleverly", "meekly", "hurriedly", "nicely"]
//
//["new", "pander", "scoop"], "er"
//➞ ["newer", "panderer", "scooper"]
//
//["bend", "sharpen", "mean"], "ing"
//➞ ["bending", "sharpening", "meaning"]

let adj = ["smart", "clever", "strong", "tall"];
let comparativeAdj = [];
let fullWord;

for (let i = 0; i < adj.length; i++) {
    fullWord = adj[i] + "er";
    comparativeAdj.push(fullWord);
}
console.log(comparativeAdj);

//6. Write a program that checks whether a number is even or odd and returns "even" for even numbers and "odd" for odd numbers.

//Examples & Expected Output
//3 ➞ "3 is odd"
//146 ➞ "146 is even"
//19 ➞ "19 is odd"

let number = 12;

if (number % 2 === 0) {
    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
}

//7. You are given 2 out of 3 of the angles in a triangle, in degrees.

//Write a program that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
//
//An acute angle is one smaller than 90 degrees.
//A right angle is one that is exactly 90 degrees.
//An obtuse angle is one greater than 90 degrees (but smaller than 180 degrees).
//For example: 11, 20 should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.
//
//Examples
//27, 59 (29 + 59 = 88), (180 - 88 = 92) ➞ Then the third angle is 92degrees so it is "obtuse" 
//135, 11 ➞ The third angle is "acute"
//45, 45 ➞ The third angle is a "right angle"

let angleOne = 1000;
let angleTwo = 40;
let sumOfAngles = (angleOne + angleTwo);
let angleThree = (180 - sumOfAngles);

if ((angleThree < 90) && (angleThree > 0)) {
    console.log(`The third angle is acute: ${angleThree}degrees`);
} else if (angleThree === 90) {
    console.log(`The third angle is a right angle: ${angleThree}degrees`);
} else if ((angleThree > 90) && (angleThree < 180)) {
    console.log(`The third angle is obtuse: ${angleThree}degrees`);
} else {
    console.log(`invalid - something is wrong!!!!`);
}
//8. Make a variable with the string value of "maria jane jones". Convert each first letter to uppercase. Make sure your code works for any three names e.g. "john james smith". 

let name = "this can be however long we want it to be";
let nameArray = name.split(" ");
let capitalizedArray = [];

for (let i = 0; i < nameArray.length; i++) {
    let firstChar = nameArray[i][0].toUpperCase();
    let remainderName = nameArray[i].substring(1, nameArray[i].length);
    let fullName = firstChar + remainderName;
    capitalizedArray.push(fullName);
}

name = capitalizedArray.join(" ");
console.log(name);
//9. Write a program that takes a string and returns the word count. The string will be a sentence.
//
//Examples & Expected output
//"This is an example" ➞ 4
//"One more example for good measure" ➞ 6
//"JavaScript is fun, right?" ➞ 4
let sentence = "This can be however long we want it to be, it doesn't matter!";

let countArray = sentence.split(" ");
console.log(`(${sentence}) contains ${countArray.length} words`);

//10. Write a program to multiply all values in an array by the amount of values in that array.
//Examples
//[2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0] 
//[4, 1, 1] ➞ [12, 3, 3]
//[1, 0, 3, 3, 7, 2, 1] ➞  [7, 0, 21, 21, 49, 14, 7]
//[0] ➞ [0]

let numbersArray = [5, 10, 15, 20, 25, 30];
let calculatedArray = [];

for (let i = 0; i < numbersArray.length; i++) {
    let multiplicationResult = numbersArray[i] * numbersArray.length;
    calculatedArray.push(multiplicationResult);
}

console.log(calculatedArray);