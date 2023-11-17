//  nested destructuring  

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


  const [{firstName : name},,{gender : gen}] = users;
  console.log(name);
  console.log(gender);
