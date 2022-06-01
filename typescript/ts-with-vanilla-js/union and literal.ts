// union type -
// basically jab ek variable mai ek se zyada types store karwana chah rahe ho

let someVar: string | number; // someVar mai number aur string dono store karwa sakte ho.

someVar = 1;
someVar = "2";

// literal type -
let options: "as-text" | "as-number";
// Now, options can only hold "as-text" string or "as-number" string.
