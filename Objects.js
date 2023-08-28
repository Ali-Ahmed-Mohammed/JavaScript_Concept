// JavaScript Object : is a collection of named values.

// the best keyword to practice object is "const" keyword.

// JavaScipt objects are containers for named values, called properties and methods.

// Object values are writen as "name:value" separated by comma

// creteating object literal

const person = {
  firstName: 'Ali',
  lastName: 'Mohamed',
  age: 21,
  id: 21,
  university: 'Abrar'
}

// Properties: are the values associated with a javaScript object.

// Properties can usually be changed, added and deleted but some are read only.

// in JavaScript all attributes can be read, but only can be changed the value attribute 

// ================== Accessing properties ================

// objectName.property
person.age;  

// or

// objectName["property"]
person["age"]

// or

// objectName[expression].  the expression must evaluate to a property name.
x = "age"; 
person[x];

// ================== for in loop ================

// the javaScript "for in" statement loops through the properties of an object

// the block inside of the "for in" loop will be executed once for each property.

/*  ==== syntax for in ====
for (let variableName in Object){
  code to be executed
}
*/

const car = {
  name: 'Toyota',
  price: 12000,
  country: 'Japan',
}

let looping = " ";

for (let x in car) {
  looping += car[x]
}
console.log(looping);

// ================== Adding new property ================

car.color = 'White';  // object.property = "value"

// ================== deleting property ================

delete car.color;   // use the "delete" keyword then write object.property

// ================== Nested object ================

// values in object can be another object

const myObject = {
  name: 'Toshipa',
  price: 600,
  nestedObject:{
    discount: '20percent',
    country: 'Egland'
  }
}

// you can access nested objects using dot or bracket notation

myObject.nestedObject.country;
// or
myObject.nestedObject["country"];
// or
myObject["nestedObject"]["country"];

// ================== Methods ================
 
// objects can also contain functions ,which are called methods.

// methods are actions that can be performed on objects

/* for example if you have a person object with the properties of "firstName" and "lastName" but you want a property of "fullName", you can create a method that will add the firstname and the last name together for you and return the full name as a property. see the example below.*/

const Person = {
  firstName: 'Mohamed',
  lastName: 'Nor',
  fullName: function () {
    return this.firstName + " " + this.lastName;  // this keyword refers to the current object
  }
}
console.log(Person);  // display the object
console.log(Person.fullName());    // output: Mohamed Nor

// to access a property of an object from within a method of the same object, you need to use the "this" keyword

// see the above function when create a full name property I use "this" keyword like "this.firstName"

// ================== Accessing object methods ================

// you can access a method by calling an objectName and a key for that method a long with (). for example.

//Person.fullName().


 

