'use strict';
//WAYS TO IMPLEMENT PROTOTYPE INHERITANCE
//1constructor function
//2.ES6 Classe
//3.Object.Create

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

//2.ES6 CLASSES

//Class Expression
// const personCl=class{
// }

//Class Declaration
class Person {
  constructor(fullName, birthYear) {
    this.Fullname = fullName;
    this.BirthYear = birthYear;
  }
  //Instance Methods
  //Methods will be added to prototype property
  calcAge() {
    console.log(2037 - this.BirthYear);
  }
  greet() {
    console.log(`Heey ${this.Fullname}`);
  }
  get age() {
    return 2037 - this.BirthYear;
  }
  //Setting property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._Fullname = name;
    else alert(`${name} is not a full Name`);
  }
  get fullName() {
    return this._Fullname;
  }
  //static Method
  static hey() {
    console.log('Hellow 😁');
  }
}
const Alex = new Person('Alex Rugara', 1996);
console.log(Alex);
Alex.calcAge();
console.log(Person.prototype);
console.log(Alex.__proto__);
Alex.greet();
console.log(Alex.age);
console.log((Alex.fullName = 'Alex M. Rugara'));
console.log(Alex.fullName);

//1.classes are not hoisted
//2. class are first class citizens
//.3.classes are executed in strict mode.

Person.hey();
/*
//Setters and Getter
const account = {
  owner: 'Alexei',
  movements: [100, 300, 45, 23],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);

account.latest = 39;
console.log(account.movements);

const Stev = new Person('Stevenson', 2007);
Stev.greet();

//STATIC METHODS
Person.hey = function () {
  console.log('Heey There 😂');
};
Person.hey();
console.log(Person.prototype);
*/
//3.OBJECT.CREATE

const personProto = {
  info(fName, bYear, country) {
    this.FirstName = fName;
    this.BirthYear = bYear;
    this.Residency = country;
  },
  calcAge() {
    console.log(2037 - this.BirthYear);
  },
};
const Stevenson = Object.create(personProto);
console.log(Stevenson);
Stevenson.name = 'Stevenson';
Stevenson.Birthyear = 1996;
Stevenson.calcAge();
console.log(Stevenson.__proto__);
Stevenson.Country = 'LuxenBerg';
console.log(Stevenson);

const Sarah = Object.create(personProto);
Sarah.info('Sarafina', 1997, 'Europe');
Sarah.calcAge();
//Codding Clallenge

console.log('----CODDING CHALLENGE----');

class Vehicle {
  constructor(make, speed) {
    this.CarName = make;
    this.Speed = speed;
  }
  accelerate() {
    const sp = (this.Speed += 10);
    console.log(`${this.CarName} Speed is ${sp}Km/h`);
  }
  break() {
    const br = (this.Speed -= 5);
    console.log(`${this.CarName} is at ${br}Km/h`);
  }
  get speedUs() {
    const nsp = this.Speed / 1.6;
    return console.log(`Speed is ${nsp}`);
  }
  set speedUs(speed) {
    this.Speed = speed * 1.6;
  }
}

const Ford = new Vehicle('Ford', 120);
Ford.speedUs;
Ford.accelerate();
Ford.accelerate();
Ford.accelerate();
Ford.break();
Ford.break();
Ford.break();
Ford.speedUs = 50;
console.log(Ford);

//Inheritance

const People = function (firstName, birthYear) {
  this.FirstName = firstName;
  this.BirthYear = birthYear;
};
People.prototype.calcAge = function () {
  console.log(2022 - this.BirthYear);
};

const student = function (firstName, birthYear, course) {
  People.call(this, firstName, birthYear);
  this.Course = course;
};
//Linking Prototypes
student.prototype = Object.create(People.prototype);

student.prototype.introduce = function () {
  console.log(
    `Hellow ! my name is ${this.FirstName} and i study ${this.Course}`
  );
};
const arugara = new student('Alex Rugara', 1997, 'Software Engeneering');
console.log(arugara);
console.log(arugara.__proto__);
arugara.introduce();
arugara.calcAge();
console.log(arugara);
console.log(arugara instanceof People);
student.prototype.constructor = student;
console.dir(student.prototype.constructor);
console.log('----CODDING CHALLENGE 3-----');

//electric car(ev)-->child, parent class is car

//parent
const carr = function (make, speed) {
  this.CarBrand = make;
  this.Speed = speed;
};
carr.prototype.accelerate = function () {
  console.log(
    `${
      this.CarBrand
    } is  going at ${(this.Speed += 20)}Km/h with a charge of ${(this.BatteryCharge -= 1)}%`
  );
};

carr.prototype.brake = function () {
  console.log(`Breaks=${(this.Speed -= 5)}Km/h`);
};

//child
const carEv = function (make, speed, bateryCharge) {
  carr.call(this, make, speed);
  this.BatteryCharge = bateryCharge;
};
carEv.prototype = Object.create(carr.prototype);

carEv.prototype.chargeBatery = function (chargeto) {
  this.BatteryCharge = chargeto;
};
//Prototype Inheritance.
carEv.prototype.constructor = carEv;

const Tesla = new carEv('Tesla', 100, 24);
console.log(Tesla);
Tesla.accelerate();
Tesla.accelerate();
Tesla.brake();
Tesla.brake();
Tesla.chargeBatery(90);
Tesla.accelerate();
Tesla.accelerate();
console.log(Tesla);
Tesla.accelerate();
Tesla.accelerate();
Tesla.brake();
Tesla.accelerate();
//inheritance using ES6 class
//parent class
/*
class Person {
  constructor(fullName, birthYear) {
    this.Fullname = fullName;
    this.BirthYear = birthYear;
  }
  //Instance Methods
  //Methods will be added to prototype property
  calcAge() {
    console.log(2037 - this.BirthYear);
  }
  greet() {
    console.log(`Heey ${this.Fullname}`);
  }
  get age() {
    return 2037 - this.BirthYear;
  }
  //Setting property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._Fullname = name;
    else alert(`${name} is not a full Name`);
  }
  get fullName() {
    return this._Fullname;
  }
  //static Method
  static hey() {
    console.log('Hellow 😁');
  }

class Student extends Person {
  constructor(fullName, birthYear, academicYear) {
    //Always needs to happen first
    super(fullName, birthYear);
    this.AcademicYear = academicYear;
  }
  introduce() {
    console.log(
      `Hellow Everyone! my name is ${this.Fullname} and i am a ${this.AcademicYear} at USIU😊`
    );
  }
}

const ar = new Student('Alex Rugara', 1997, 'Sophomore');
console.log(ar);
ar.introduce();
ar.calcAge();
}*/

class accountA {
  //private field
  #Pin;
  constructor(ownerName, currency, pin) {
    this.Owner = ownerName;
    this.Currency = currency;
    //protected Property
    this.#Pin = pin;
  }
  getPin = function () {
    return console.log(this.#Pin);
  };
}

const accA1 = new accountA('Rugara Alex', 'KSH', 6643);
console.log(accA1);

class accountB extends accountA {
  //public fields(Instances)
  _Movements = [];
  constructor(ownerName, currency, pin) {
    super(ownerName, currency, pin);
    //protected Property
    // this._Movements = [];
  }
  //Public interface of Object.
  deposit(val) {
    this._Movements.push(val);
    return this;
  }
  getMovements = function () {
    return this._Movements;
  };
  withdrawal(val) {
    this.deposit(-val);
    return this;
  }
  //Protected Methods
  _approvalLoans(val) {
    return true;
  }
}
const accB1 = new accountB('Sarah iko', 'NZD', 2911);
accB1.deposit(200);
accB1.withdrawal(150);
console.log(accB1);
console.log(accB1.getMovements());
accB1.getPin();

//Chaining
accB1.deposit(200).deposit(500).withdrawal(78).deposit(1000);
console.log(accB1);

console.log('-----FINAL CODDING CHALLENGE----');

class CarCl {
  constructor(make, speed) {
    this.CarBrand = make;
    this.Speed = speed;
  }
}
class EVCL extends CarCl {
  #BaterryCharge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#BaterryCharge = charge;
  }
  chargeBatery(chargeto) {
    this.#BaterryCharge = chargeto;
    return this;
  }
  accelerate() {
    console.log(
      `${
        this.CarBrand
      } going at ${(this.Speed += 10)} ,with charge Battery of ${(this.#BaterryCharge -= 1)}%`
    );
    return this;
  }
  brake() {
    console.log(`Speed Reduced to ${(this.Speed -= 5)}`);
    return this;
  }
}
const Rivian = new EVCL('Rivian', 100, 20);

Rivian.accelerate()
  .brake()
  .accelerate()
  .chargeBatery(67)
  .accelerate()
  .accelerate();
console.log(Rivian);
