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
