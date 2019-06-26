// JavaScript Test: Advanced Topics


/* #### 1. >10
Check if the values of an array are larger than 10. Return the values that are 
larger than 10 in an array. **Do not use a loop.** */ 

// filtering array elements larger than 10
// let array = [12, 212, 21, 21, 2134243, 54, 54, 6, 5676];
// let filter = array.filter(items => items > 10);
// console.log(filter);

/* #### 2. Validation 
Come up with a new way to validate a pin code with a simple function called validatePin 
that returns true (for a valid pin code) or false (for an invalid pin code).

Here are the rules for a valid password:

* The pin code must consist of only numbers
* The pin code must be 4 digits long
* The pin code should have at least two different digits represented
* The pin code's last digit should be even
* The pin code should add up to at least 5

-Examples: 
-The following pin codes are valid:
* 1112
* 1994

-The following pin codes are invalid:
* 1c24 // is not a number
* 12344 // five digit pin code
* 1235 // last digit is odd
* 1110 //sum less than 5 */

function validatePin(pinCode) {
    // const pinString = pinCode.toString();
    //check if pincode is a number and parses it into an integer
    const number = parseInt(Number(pinCode));
    if (isNaN(number)) {
        return {
            valid: false,
            reason: "Invalid pin - pin is NaN"
        }
    }
    //converting number eliminates possibility of any floating numbers
    const numberString = number.toString();
    const pinSplit = numberString.split("");

    //checking length of pin
    const lengthOfPin = 4;
    if (pinSplit.length !== lengthOfPin) {
        return {
            valid: false,
            reason: "Invalid pin length"
        }
    }

    if (parseInt(pinCode[lengthOfPin - 1]) % 2 !== 0) {
        return {
            valid: false,
            reason: "Invalid pin: last digit is odd"
        };
    }
    let result = 0;
    let checkIdenticalNumbers = [];
    for (let i = 0; i < pinSplit.length; i++) {
        result += parseInt(pinSplit[i]);
        if (pinSplit[0] !== pinSplit[i]) {
            checkIdenticalNumbers.push(pinSplit[i]);
        }
    }
    // check if all numbers are identical 
    if (checkIdenticalNumbers.length === 0) {
        return {
            valid: false,
            reason: "Invalid pin: all numbers are identical"
        };
    }
    // check if total value of pin is less than 5
    if (result < 5) {
        return {
            valid: false,
            reason: "Invalid pin: Pin is less than 5"
        };
    }
    return {
        valid: true,
        reason: "Valid pin: passed all tests"
    }

}
// console.log(validatePin("12.6"))

/* #### 3. Class Blueprint

Create a blueprint for a course at DCI e.g. FwB 13a - using the "class" syntax in javascript.
* The class should contain whether the course is a year long course or an orientation course.
* The class should contain who the teacher is. 
* The class should contain whether the group is learning marketing or web development. 
* The class should contain the number of students taking the course.
* The class should have a method that checks how big a classroom should be depending on the 
number of students taking the course. 1 student =  22m². 
* Add a method using "prototype" to print all the details of the course e.g. "This is a year 
long web development course taught by John Smith. There are 10 students taking the course." */

class Course {
    constructor(teacher, type, duration, number) {
        this.teacher = teacher;
        this.type = type;
        this.duration = duration;
        this.number = number;
    }
    spaceNeeded() {
        let result = this.number * 3;
        return `The class should be ${result}m2`;
    }
}

Course.prototype.details = function () {
    return `This is a ${this.type} class which is taught by ${this.teacher} for a ${this.duration}. It has ${this.number} students in the class. ${this.spaceNeeded()}`
}

let courseObject = new Course("John", "web dev", "year", 22);
// console.log(courseObject.spaceNeeded());
// console.log(courseObject.details());


/* #### 4. Events  
Each event below has a different turnout. Sort the array of objects based on which day of the 
week had the highest turnout. Highest turnout -> lowest turnout.

```javascript
let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
]
``` */

let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
]

// let sortedEvents = events.sort((a, b) => {
//     return b.turnout - a.turnout;
// });

let sortedEvents = events.sort((a, b) => {
    if (b.turnout > a.turnout) {
        return 1;
    } else {
        return -1;
    }
})

// console.table(sortedEvents);

/* #### 5. Return Squared Odds
**Complete this without using a loop.**
Create a function (or series of functions) that takes in an array of numbers, squares every 
number, removes all results that are even, and returns an array of odd numbers. */

let arrayNumbers = [1, 2, 3, 4];
let mapped = arrayNumbers.map(x => Math.pow(x, 2));
// console.log(mapped);
let filteredArray = mapped.filter(element => element % 2 !== 0);
// console.log(filteredArray);

/* #### 6. 10,000  
Create a (small) game!
* Each player has 6 dice. (Each dice has the possibility to roll from 1-6).
* Each player rolls all 6 dice during each turn and the player's score is added to their 
individual total. 
* The first player to reach 10,000 wins. 

* Example of expected output: "Player 1: 9984, Player 2: 10,002 - Player 2 wins!" */

class Dice {
    roll() {
        return Math.floor((Math.random() * 6) + 1);
    }
}

class Player {
    constructor(number) {
        this.number = number;
        this.rollCount = 0;
        this.total = 0;
        this.turns = 0;
    }
}

function gameOfDice() {
    let dice = new Dice();
    //create my players
    let players = [];
    let numberOfPlayers = 10;
    for (let i = 1; i <= numberOfPlayers; i++) {
        players.push(new Player(i));
    }
    //each player's turn
    while (true) {
        for (let i = 0; i < players.length; i++) {
            // roll dice 6 times
            for (let j = 0; j <= 6; j++) {
                players[i].total += dice.roll();
                players[i].rollCount++;
                if (players[i].total >= 10000) {
                    return players;
                }

            }
            players[i].turns++;
        }
    }

}

// const results = gameOfDice();
function printResults(gameResults) {
    for (let i = 0; i < gameResults.length; i++) {
        console.table(`Player ${gameResults[i].number}: ${gameResults[i].total}`)
    }
    let sortedResults = gameResults.sort((a, b) => b.total - a.total);

    console.table(sortedResults);
    console.log(`Player ${sortedResults[0].number} is the winner with a score of ${sortedResults[0].total} with a roll count of ${sortedResults[0].rollCount}`)
    return;
}

// printResults(results);

/* #### 7. World Cup 
How long has it been since Germany won the world cup? Get the number of days since Germany 
won the cup. Germany last won on the 13th of July 2014. */ 

function daysBetween(dateOne, dateTwo) {
    // 1 day in milliseconds
    const oneDay = 86400000;


    //converting both dates into milliseconds
    let dateOneMil = dateOne.getTime();
    let dateTwoMil = dateTwo.getTime();

    //calculating the difference in milliseconds
    const difference = dateTwoMil - dateOneMil;

    //converting to days
    return `${Math.round(difference / oneDay)} days since Germany won the world cup`
}

let now = new Date();
let winDate = new Date(2014, 06, 13);
// console.log(daysBetween(winDate, now));


/* #### 8. Working Hours
Calculate how many hours (total) this person worked in the week. 
* Note: start is always morning time, end is always afternoon. 

```javascript
const hourTracking = [
      { day: 'Monday', start: 8, end: 17},
      { day: 'Tuesday', start: 9, end: 15},
      { day: 'Wednesday', start: 10, end: 18},
      { day: 'Thursday', start: 7, end: 14},
      { day: 'Friday', start: 6, end: 12},
    ];
``` */

const hourTracking = [
    { day: 'Monday', start: 8, end: 17 },
    { day: 'Tuesday', start: 9, end: 15 },
    { day: 'Wednesday', start: 10, end: 18 },
    { day: 'Thursday', start: 7, end: 14 },
    { day: 'Friday', start: 6, end: 12 },
];

const hours = hourTracking.reduce((total, hourTracking) => {
    return total += (hourTracking.end - hourTracking.start);
}, 0);

// console.log(hours);

/* #### 9. Callback 
**Part 1**: Given the code below, write a function with a callback. The function should 
return a new array with each element calculated to the power of 2. 

```javascript
function mapping(){
//insert code here
}
const powerOfTwo = mapping([1,2,3,4,5], (val) => Math.pow(val,2) );
```
Expected Output: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

**Part 2**: Create another variable, call the `mapping` function again, but now change the 
callback function to return an array of the square root of each element. */ 

function mapping(array, fn) {
    const mappedArray = array.map(x => fn(x));
    return mappedArray;
}
// declared function
function powerOf(val) {
    return (Math.pow(val, 2));
}
//passing a declared function
const power = mapping([1, 2, 3, 4, 5], powerOf);
// console.log(power)

//passing an anonymous function
const powerOfTwo = mapping([1, 2, 3, 4, 5], function (val) { return Math.pow(val, 2) });
// console.log(powerOfTwo);

//passing an arrow function
const timesTwo = mapping([1, 2, 3, 4, 5], (val) => val * 2)
// console.log(timesTwo);

const squareRoot = mapping([1, 2, 3, 4, 5], (val) => Math.sqrt(val));
// console.log(squareRoot);

/* #### 10. 2D Array
Given the 2D Array below, **loop** through the arrays to print the values. 
```javascript
let board = [[1, 2, 3], 
	     ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"], 
	     [true, false]]
``` */

let board = [[1, 2, 3],
["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
[true, false]];

for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        // console.log(board[i][j]);
    }
}