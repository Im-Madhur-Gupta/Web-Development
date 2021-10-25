console.log(this); // Browser me agr JS chalai to global "this" (inside conole.log()) will refer to window (browser window). Node me chalai to "global" ko refer karega global "this". Simply VS Code me code runner etc se chalai to {} empty object.

// Ye pata lagane ke liye ki koi "this" kis object ko refer kar raha he, just see kis object ke andar call hua he.

// Functions ke andar "this" -

// 1. Normal Function -
// function ___(){
//      yaha "this" will be refered from the place where the function is getting called.  
// }
// Normal Function ke liye agr app call ke time specify karna chahte ho this ko to -
// ___.call(object, arguments); --> is object se "this" ayega. Ye explicit binding hoti he.

// 2. Arrow Function -
// let ___ = ()=>{
//      yaha "this" will be refered from the place where arrow function is getting declared.
// };


// Just for Knowledge - Earlier JS me class banane ke liye prototype system ka use karte the. Badme "class" keyword aya, class ka constructor banane ke liye we use "contructor" keyword.