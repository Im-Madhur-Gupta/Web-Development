let userInput: unknown;

userInput = 12;
userInput = "Mad";

// let str: string = userInput;

// "unknown" is similar to "any" but the difference is that "any" type variable gets its type inferred when we assign it some value, whereas a variable of type "unknown" will remain "unknown".

// ------------------------------------------------------------

// never type -
// should be used as the return type of the function that doesnt return anything.
// not compulsory to do so.
// general use - when function throws an error.
