console.log("My script is running...");


var myString = "Var: Intro to JavaScript";

let myString2 = "Let: Intro to JavaScript";

const myString3 = "Const: Intro to JavaScript";

myString4 = "Intro to JavaScript"

console.log(myString);
console.log(myString2);
console.log(myString3);
console.log(myString4);

console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.length);
console.log(myString[0]);
console.log(myString.replaceAll("a", "e"));

let c = "5";
let d = 5;

let a = 4;
let b = 3;

console.log(c == d);
console.log(c === d);
console.log(a != b);
console.log(a < b);
console.log(a > b);

console.log(a < b || c < d);
console.log(a < b && c < d);

let e = "2";
let f = "5";

console.log(e.concat(f));
console.log(parseInt(e) + parseInt(f));

let firstNumber = prompt("Enter the first number: ");

let operand = prompt("Please chose '+', '-', '/', '*'");

let secondNumber = prompt("Enter the second number: ");

console.log(firstNumber, secondNumber, operand);

let result 

if (operand == '+') {
    result = firstNumber + secondNumber
} else if (operand == '-') {
    result = firstNumber - secondNumber
} else if (operand == '/') {
    result = firstNumber / secondNumber
} else if (operand == '*') {
    result = firstNumber * secondNumber
}

/*does the same as above however uses cases

switch (operand) {
    case "+": 
        result = firstNumber + secondNumber;
        break;
    case "-": 
        result = firstNumber - secondNumber;
        break;
    case "/": 
        result = firstNumber / secondNumber;
        break;
    case "*": 
        result = firstNumber * secondNumber;
        break;
}

*/

alert(`The caclulated result is: ${result}`);



