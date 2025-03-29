const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log({ numbers });

console.log({
  first: numbers[0],
  last: numbers[numbers.length - 1],
  mid: numbers[4],
});

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'peach'];

console.log({ fruits, lastFruit: fruits[fruits.length - 1] });

const complexArray = [1, 2, [3, 4, ['a', 'b']], 8, 7];

console.log({ complexArray });

const flattedArray = complexArray.flat();

console.log({ flattedArray });

const fullFlattedArray = complexArray.flat(Infinity);

console.log({ fullFlattedArray });

const unsortedArray = [7, 2, 5, 1, 4, 10, 22, 43, 3, 6, 8, 9];

console.log({ unsortedArray });

const sortedArray = unsortedArray.toSorted();

console.log({ sortedArray });

const sortedArray2 = unsortedArray.toSorted((a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
});

const sortedArray3 = unsortedArray.toSorted((a, b) => a - b);

console.log({ sortedArray2, sortedArray3 });

const unsortedCars = ['BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda'];

console.log({ sortedArray: unsortedCars.toSorted(), unsortedCars });

const cars = [
  { name: 'BMW', year: 2020 },
  { name: 'Mercedes', year: 2018 },
  { name: 'Audi', year: 2019 },
  { name: 'Toyota', year: 2021 },
  { name: 'Honda', year: 2017 },
];

console.log({ cars, sortedCars: cars.sort((a, b) => a.year - b.year) });

console.log({
  sortedByName: cars.toSorted((a, b) => a.name.localeCompare(b.name)),
});

console.log({
  fruits,
  kiwiIndex: fruits.indexOf('kiwi'),
  notFound: fruits.indexOf('sdfbdhgfhjd'),
});

console.log({
  numbers,
  someIndex: numbers.indexOf(3),
  hasElement: numbers.includes(33),
});

console.log({
  cars,
  someIndex: cars.indexOf({ name: 'Audi', year: 2019 }),
  hasElement: numbers.includes({ name: 'Audi', year: 2019 }),
});

console.log({
  cars,
  found: cars.find((car) => car.name === 'Porsche'),
  foundIndex: cars.findIndex((car) => car.name === 'BMW'),
  hasElement: cars.some((car) => car.year === 2017),
});

numbers.push(345);

console.log({ numbers });

const stack = [];

stack.push(1);
stack.push(2);

const popped = stack.pop();

stack.push(3);

stack.pop();

console.log({ stack, popped });

const queue = [];
queue.push(1);
queue.push(2);

const dequeued = queue.shift();

queue.push(3);

queue.shift();

console.log({ queue, dequeued });

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = array1.concat(array2);
const mergedArray2 = array2.concat(array1);

console.log({ mergedArray, mergedArray2 });

const array3 = [...array1, ...array2];

console.log({ array3 });

const array4 = [34, 53, 67, 1, 3, 4, 5, ...array3, 1, 2, 3];

console.log({ array4 });

const array5 = array4.toSpliced(2, 3);

console.log({ array5 });

const array6 = array4.toSpliced(2, 0, 100, 200, 300);

console.log({ array6 });

const advancedCars = [
  { name: 'BMW', year: 2020, color: 'red', sold: true },
  { name: 'Mercedes', year: 2018, color: 'blue', sold: false },
  { name: 'Audi', year: 2019, color: 'green', sold: true },
  { name: 'Toyota', year: 2021, color: 'yellow', sold: false },
  { name: 'Honda', year: 2017, color: 'purple', sold: false },
  { name: 'Porsche', year: 2022, color: 'black', sold: false },
  { name: 'Ford', year: 2016, color: 'white', sold: false },
  { name: 'Chevrolet', year: 2015, color: 'silver', sold: false },
  { name: 'Nissan', year: 2023, color: 'orange', sold: false },
  { name: 'Hyundai', year: 2024, color: 'pink', sold: false },
];

console.log({
  advancedCars,
  years: advancedCars.map((car) => car.year),
  nameAndColor: advancedCars.map((car) => ({
    name: car.name,
    color: car.color,
  })),
});

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log({ sum });

let sum2 = 0;
numbers.forEach((num) => {
  sum2 += num;
});

let sum3 = 0;

for (const car of advancedCars) {
  sum3 += car.year;
}

console.log({ sum3 });

console.log({ array4 });

const getUnique = (arr) => {
  const unique = [];
  for (const item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }
  return unique;
};

const getUniqueFast = (arr) => {
  const unique = {};
  for (const item of arr) {
    unique[item] = item;
  }
  return Object.values(unique);
};

console.log({ unique: getUnique(array4), unique2: getUniqueFast(array4) });

console.log({
  numbers,
  filteredNumbers: numbers.filter((num) => num > 3).sort(),
});

console.log({
  advancedCars,
  filteredCars: advancedCars
    .filter((car) => !car.sold)
    .map((car) => `${car.name}, ${car.year}`),
  soldCars: advancedCars.filter((car) => car.sold).map((car) => car.name),
});

console.log({
  unsortedArray,
  reversed: unsortedArray.toReversed(),
  sortedDesc: unsortedArray.toSorted((a, b) => b - a),
});
