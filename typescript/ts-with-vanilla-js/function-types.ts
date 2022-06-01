// Kisi var mai function store karwana he
// A TS thing

let func1: Function; // func1 is any function

let func2: (number1: number, number2: number) => number;
// func2 is a function which has 2 number args named number1 and number2 and it returns a number.

const func3 = (num: number): void => {
  return;
};

// a func that has return type void
// meaning whatever it returns (if something) will simply be ignored.
type voidReturnFunc = (num: number) => void;
const func4: voidReturnFunc = (num) => {
  return true;
};
// return type of func4 is void, which is indeed the type of voidValue variable.
const voidValue = func4(1);
