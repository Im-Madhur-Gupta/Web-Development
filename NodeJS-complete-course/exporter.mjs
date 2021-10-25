// The modern way to export modules (ES Modules aka ECMA Script Modules) is using the export keyword before declaration of the thing that you want to export.
// IMP - Jis bhi file me mai modern way ka use kar raha hu modules use karne ke liye inside Node then those files must have extension of .mjs
export const action = () => {
    console.log("Hello");
};
export const work = () => {
    console.log("Hello Work");
};

// OLD Module export syntax of Node, called CommonJS way.
// module.exports = {action,work};

// IMP - There is a way to get CommonJS and ES Modules working together. But thats NOT recommended.

// All modern Node modules that we use today are ES modules.