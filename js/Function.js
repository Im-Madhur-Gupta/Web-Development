console.log("This is my 1st external js file.");

// Declaring function in js -
function greet(name) {
  let name1 = "xyz"; // This is a local variable of the function, its scope is limited to the function body.
  console.log(`Good Morning, ${name}.`);
}
greet("Madhur");
greet("Aditya");
greet("Jay");

// Default parameter value in a function -
function hello(name, lang = "hindi") {
  // Default parameter value agr maine kisi function ke parameter ko di he aur call ke time maine koi value us paramter ke corresponding supply ni ki to default chal jaigi, but agr supply ki he to Overwrite ho jaegi.
  if (lang == "hindi") {
    console.log("Namaskar " + name);
  } else if (lang == "english") {
    console.log("Hello " + name);
  } else if (lang == "spanish") {
    console.log("Hola " + name);
  }
}
hello("Madhur");
hello("Madhur", "english");
hello("Madhur", "spanish");
hello("Madhur", "hindi");

// Return wale functions -
// kyoki upar wale functions kuch return ni kar rahe the to unka return value store karne ki koshish me undefined milega.
// Abviously koi function agr return ho chuka he to uske aage ka code execute ni hoga.
function remainder(a, b) {
  return a % b;
}
let var1 = remainder(1, 2);
console.log(var1);
console.log(remainder(9, 7));

// Function expression -
// Named function expression -
let greet1 = function greet1() {
  console.log("Hi1");
};
// Arrow functions cant be named function expression.

// Anonymous function expression -
let greet2 = function () {
  console.log("Hi2");
};
let greet3 = () => {
  console.log("Hi3");
};

// Immidiately called function expression -
// function expression likho aur us function ko call bhi kardo.
// (function greet4() {
//   console.log("Hi4");
// })();
(() => console.log("Hi4"))();
