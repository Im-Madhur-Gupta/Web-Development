const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

// const res = add("1", 2); --> Err de raha

const res = add(1, 2);

console.log(res);

let obj: {
  name: string;
  age: number;
  optional?: string; // optional ppt
};

obj = {
  name: "Madhur",
  age: 21,
};

let arr1: string[]; // array of strings

let arr2: any[]; // array that can store any type of elements
