const users = [
  {
    name: 'John',
    age: 25,
    getData() {
      return `${this.name}, ${this.age}`;
    },
    cars: ['BMW', 'Audi'],
    city: { name: 'New York' },
  },
  {
    name: 'Jane',
    age: 30,
    getData() {
      return `${this.name}, ${this.age}`;
    },
    cars: ['Ford', 'Audi'],
  },
  {
    name: 'Jim',
    age: 27,
    getData() {
      return `${this.name}, ${this.age}`;
    },
    cars: ['BMW', 'Ford'],
    city: { name: 'Los Angeles' },
  },
  {
    name: 'Jack',
    age: 26,
    getData() {
      return `${this.name}, ${this.age}`;
    },
    cars: ['Audi', 'Ford', 'Porche'],
  },
  {
    name: 'Jill',
    age: 22,
    getData() {
      return `${this.name}, ${this.age}`;
    },
    cars: ['BMW', 'Porche', 'Mercedes'],
  },
];

console.log({ users: users });

const serializedUsers = JSON.stringify(users);
console.log(serializedUsers);

function showPackage() {
  const package = JSON.parse(`{
    "name": "js-course",
    "version": "1.0.0",
    "dependencies": {
      "prettier": "^3.5.3"
    }
  }`);
  console.log({ package, type: typeof package });
}

function showUsers() {
  users[0].cars = ['BMW', 'Audi', 'Ford'];

  delete users[0].testThis;
  delete users[0].cars;

  users[0]['key'] = 'value';

  for (let i = 0; i < users.length; i++) {
    console.log(users[i].getData());
    console.log(users[i]);
  }

  users[0].testThis = function () {
    console.log({ a: this });
  };
}

function getUserCars() {
  const cars = {};

  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].cars.length; j++) {
      cars[users[i].cars[j]] = i;
    }
  }

  console.log({ cars: Object.keys(cars) });
}

function groupUsersByCars() {
  const cars = {};

  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].cars.length; j++) {
      const car = users[i].cars[j];

      if (!cars[car]) {
        cars[car] = [];
      }

      cars[car].push(users[i].name);
    }
  }

  console.log({ cars });
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

function getObjectData() {
  // console.log({ properties: Object.keys(obj) });
  // console.log({ values: Object.values(obj) });
  console.log({ entries: Object.entries(obj) });
}

function getUserCities() {
  for (let i = 0; i < users.length; i++) {
    // if (users[i].city) {
    //   console.log({ cityName: users[i].city.name });
    // } else {
    //   console.log({ cityName: undefined });
    // }

    console.log({ cityName: users[i].city?.name ?? 'No city' });
  }
}

function getUserNameAndAge() {
  const names = users.map((user) => ({
    name: user.name,
    // age: user.age,
    // test: true,
  }));
  console.log({ names });
}
