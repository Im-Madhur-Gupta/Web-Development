console.log(global);
// global object in node is same as window object in the browser.

// __dirname gives the directory path relative to the file that is being executed. IMP - __dirname, __filename don't work on .mjs files.
console.log(__dirname);

// __filename me bs directory ke name ke sath sath file name bhi aa jata he.
console.log(__filename);

// process object me basically current environment ke bare me sara kuch hota he.
console.log(process);