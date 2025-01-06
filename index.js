//1. Task: Array Filtering and Mapping
const people = [
  { name: "Rahat", age: 25, gender: "female" },
  { name: "Ashik", age: 27, gender: "male" },
  { name: "Mahin", age: 20, gender: "male" },
  { name: "Maruf", age: 14, gender: "female" },
];

const getMaleNamesArray = (people) => {
  return people
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

console.log(getMaleNamesArray(people));

//2. Task: Object Manipulation
const books = [
  { title: "book a", author: "author a", year: 2000 },
  { title: "book b", author: "author b", year: 2000 },
  { title: "book c", author: "author c", year: 2000 },
];

function getBookTitles(books) {
  return books.map((book) => book.title);
}

const bookTitles = getBookTitles(books);
console.log(bookTitles);

//3. Task: Function Composition
function square(number) {
  return number * number;
}

function double(number) {
  return number * 2;
}

function addFive(number) {
  return number + 5;
}

function composedFunction(number) {
  return addFive(double(square(number)));
}

console.log(composedFunction(5));

//4. Task: Sorting Objects
const cars = [
  { make: "make a", model: "model 1", year: 2018 },
  { make: "make b", model: "model 2", year: 2020 },
  { make: "make c", model: "model 3", year: 2015 },
];

const sortCarsByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

console.log(sortCarsByYear(cars));

//5. Task: Find and Modify
const updatePerson = (people, name) => {
  return people.map((person) =>
    person.name === name ? { ...person, age: person.age + 1 } : person
  );
};

console.log(updatePerson(people, "Rahat"));
