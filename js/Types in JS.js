/* Primitives in JS -
1. undefined (basically not defined)
2. string
3. boolean
4. number
5. object
6. symbol
7*. null (behaves strangely with operators)

array (sub-type of object)
function (sub-type of object)

JS is dynamically typed language.
Types are associated with values NOT with variables.
*/

var v1;
console.log(typeof v1); // --> undefined as the varaible isn't initialized
console.log(typeof v2); // --> undefined as the v2 is not declared

v1 = "1";
console.log(typeof v1);

v1 = 1;
console.log(typeof v1);

v1 = true;
console.log(typeof v1);

v1 = {}; // empty object
console.log(typeof v1);

v1 = Symbol();
console.log(typeof v1);

// IMP as the following isn't obvious -

v1 = null;
console.log(typeof v1); // --> typeof null will give object (no explanation for this)

v1 = function abc() {};
console.log(typeof v1); // --> will give function, but function is actually a subtype of object (no explanation for this)
v1 = () => {};
console.log(typeof v1); // --> will give function, but function is actually a subtype of object (no explanation for this)

v1 = [];
console.log(typeof v1); // typeof array will give object (makes sense.)

// Misc
console.log(Array.isArray(v1));
