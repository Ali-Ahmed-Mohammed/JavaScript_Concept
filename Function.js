
// Function is a block of code that perform a specific task.

//================ Declaring a function ==================

function nameOfFunction() {
  // function body
}

// A function is declared by using "function" keyword.

// declaring a function

function greet() {
  console.log('Hello, I`m in function');
}

//================ Calling a function ==================

// in the above program, we have declared a function named "greet()". To use that function, we need to call it.

greet();  // function call

// Example Display a text

// declaring a function

function sayHi() {
  console.log('Hi');
}

// calling the function

sayHi();

//================ function parameters ==================

/* A function can also be declared with parameters.
A parameter is a value that is passed when declaring a function*/

// Example function with parameters

function sayHello(name) {
  console.log('Hello'+ " "+ name);
}

// variable name can be different

 let name = 'Ali';  // I create variable that return a name

sayHello(name);

/* when a value is passed when declaring a function, it is called "parameter". And when the function is called the value passed is called "argument" */

// Example Add two numbers

function add(a, b) {
  console.log(a+b);
}

add(2, 6)   // 8
add(1, 23)  // 24

/* in the above program, the "add" function is used to find the sum of two numbers.
The function is declared with two parameters "a" and "b".
The function is called using its name and passing two arguments "2" and "6" in one and "1" and "23" in another.
Notice: you can call a function as many times as you want.
You can write one function and then call it multiple times with different arguments*/

//================ function Return ==================

// the "return" statement can be used to return the value to a function call.

// the "return" statement denotes that the function has ended. any code after "return" is not executed.

// if nothing is returned, the function returns on "undefined" value.

function addNumbers(a, b) {
  return a + b;
}

let x = addNumbers(4, 5);
console.log(x);

//================ benefits of using a function ==================
/*
1: function makes the code reusable. you can declare it once and use it multiple times.
2: function makes the program easier as each small task is divided into a function.
3: function increases readability */

//================ function expression ==================

// in javascript, functions can also be defined as expression.

// Example find square of a number

let y = function (num) { return num * num }  // function is declared inside the variabel
console.log(y(4));  // call the function using the variable name.

// the function above is called an anonymous function b/c it doesn`t a name.

// javascript expression functions are written as arrow functions

//================ javascript varaible scope ==================

/* scope refers to the availabity of variables and functions in certain parts of the code.
In javascript, a variable has two types of scope.
1: Global scope: a variable declared at the top of a program or outside of a function.
2: Local scope: it can only be accessed within a function */

//================ Global scope ==================

let z = "hello";
function print() {
  console.log(z);
}

print(); // hello

// in the above example, variable is declared at the top of the program or outside of the function and is a global variable. It means the variable "z" can be used anywhere in the program.

// the value of a global variable can be changed insdie a function.
let a = 2;
function sayHii() {
  a = 2 * 2;
}

// before calling the function
console.log(a);  // 2

// after calling the function
sayHii();
console.log(a);  // 4

/* in the above example, variable "a" is a global variable. the value of "a" is "2" the variable "a" is accessed inside a function and the value changed to "2 multiply 2". Hence, the avlue of "a" changes after changing it inside the function*/

//Note: avoid using the global variables b/c the value of a global variable can change in different areas in the program. it can introduce unknown result in the program.

//======================= Local scope ====================

// let A = "Ali";
// function nam() {
//   let b = "is my nam";
//   console.log(A+b);
// }
// nam();
// console.log(a + b);  // error b is not defined

//======================= Function Hoisting ====================

// hoisting: is a behavior in which a function or a variable can be used before declaration.

// a function can be called before declaring it.

hoisted();

function hoisted() {
  console.log('Hi, Ali');
}

// the function "hoisted" is called before declaring it and the program shows the output. This is due to hoisting

// when a function is used as an expression, an error occurs b/c only declarations are hoisted.

// hoisting();

// let j = function(){
//   console.log('error');   // hoisting is not defined
// }
 
