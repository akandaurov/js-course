function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.getUserInfo = function () {
  return `Name: ${this.name}, Age: ${this.age}`;
};

const user = new User('John', 30);

console.log({ user });

class UserClass {
  // ocupation = 'developer';
  #company = 'Google';
  static prop1 = 'prop1';

  constructor(name, age, ocupation = 'developer') {
    this.name = name;
    this.age = age;
    this.ocupation = ocupation;
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getUserInfo = () => {
    return `Name: ${this.name}, Age: ${this.age}${this.getAdditionalInfo()}`;
  };

  get company() {
    return `${this.name}'s company: ${this.#company}`;
  }
  set company(value) {
    this.#company = value + ' ' + 2344;
  }

  getAdditionalInfo = () => {
    return '';
  };

  static getStaticInfo() {
    return `Static info: ${this.name}, ${this.age}`;
  }
}

const jane = new UserClass('Jane', 25);
jane.someThing = 5;

const bob = new UserClass('Bob', 40, 'manager');

console.log({ jane, bob });

bob.company = 'Microsoft';

console.log({ janeCmpany: jane.company, bobCompany: bob.company });

class UserWithCar extends UserClass {
  constructor(name, age, car) {
    super(name, age);
    this.car = car;
  }

  getAdditionalInfo = () => {
    return `, Car: ${this.car}`;
  };
}

const alice = new UserWithCar('Alice', 28, 'BMW');

alice.company = 'Tesla';

console.log({
  alice,
  aliceInfo: alice.getUserInfo(),
  bobInfo: bob.getUserInfo(),
});

const api = {
  doSomething: () => {
    console.log('didSomething');
  },
  doSomething2: () => {
    console.log('didSomething2');
  },
};

class ClassApi {
  static doSomething() {
    console.log('classDidSomething');
  }
  static doSomething2() {
    console.log('classDidSomething2');
  }
}

api.doSomething();
api.doSomething2();

ClassApi.doSomething();
ClassApi.doSomething2();

console.log({
  prop1Inherited: UserWithCar.prop1,
  staticMehod: UserWithCar.getStaticInfo(),
});

setTimeout(alice.getUserInfo, 1000);

console.log({ aliceInfo: alice.getUserInfo() });

class UseWithCarAndCity extends UserWithCar {
  constructor(name, age, car, city) {
    super(name, age, car);
    this.city = city;
  }

  getAdditionalInfo = () => {
    return `, City: ${this.city}`;
  };
}

const mary = new UseWithCarAndCity('Mary', 30, 'Parsche', 'Kharkiv');
console.log({ mary, maryInfo: mary.getUserInfo() });

class ArrayWithSum extends Array {
  sum() {
    return this.reduce((acc, curr) => acc + curr, 0);
  }
}

const array = new ArrayWithSum(1, 2, 3, 4, 5);

console.log({ array, sum: array.sum() });

const array2 = [1, 2, 3, 4, 5];

console.log({ equal: JSON.stringify(array2) === JSON.stringify(array) });

console.log({
  isUseWithCarAndCity: bob instanceof UseWithCarAndCity,
  isUser: bob instanceof UserClass,
});
