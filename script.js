'use strict';
//CONSTRUCTOR FUNCTIONS
const someone = function (firstName, birthYear) {
  this.Firstname = firstName;
  this.Birthyear = birthYear;
  this.CurentYear = 2022;
};
//Diffrence between a constructor function in OOP and a regular function is that a constructor function we call it using the 'new' Keyword.
const Alexei = new someone('Alexei', 1997);
console.log(Alexei);
//What happens behind the scenes when we call a function with the new Operator??
//1. New empty {object} is created
//2.function is called ,this=={}
//3.{object} linked to a prototype
//4.Function automatically returns the object from begining{}

const Matilda = new someone('Matilda', 2017);
const sarah = new someone('Sarah', 1980);
console.log(Matilda, sarah);

//Prototypes & prot0types Inheritance
console.log(someone.prototype);
someone.prototype.calcAge = function () {
  const Age = this.CurentYear - this.Birthyear;
  console.log(Age);
};
Alexei.calcAge();
sarah.calcAge();
console.log(Alexei.__proto__);
someone.prototype.School = 'USIU-Africa';
console.log(sarah.School);
console.log(Alexei.__proto__);

console.log(Alexei.__proto__.__proto__);
console.dir(someone.prototype.constructor);

//prototype of arrays
const arr = [1, 2, 2, 7, 5, 2, 5, 7];
console.log(arr.__proto__ == Array.prototype);
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
console.log(arr.__proto__);

//Codding Challenge

const car = function (make, speed) {
  this.CarMake = make;
  this.CarSpeed = speed;
};
car.prototype.accelerator = function () {
  const crspeed = this.CarSpeed + 10;
  console.log(`Your ${this.CarMake}'s Speed is ${crspeed}Km/h`);
};
const Mercedes = new car('Mercedes-2019', 95);
Mercedes.accelerator();
car.prototype.brake = function () {
  const br = this.CarSpeed - 5;
  console.log(`your ${this.CarMake}'s  Speed decreased to ${br}Km/h`);
};
Mercedes.brake();

const Benz = new car('BMW', 120);
Benz.accelerator();
Benz.brake();

//Es6 Classes
