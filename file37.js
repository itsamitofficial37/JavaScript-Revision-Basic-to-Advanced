// object inside array

const users = [
  {
    userId: 1,
    firstName: "Amit",
    gender: "Male",
  },
  {
    userId: 2,
    firstName: "Arpit",
    gender: "Male",
  },
  { userId: 3, firstName: "Prince", gender: "Male" },
];

for(let user of users) {
    console.log(user);
}