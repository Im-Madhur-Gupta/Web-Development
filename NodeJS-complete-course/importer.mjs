// OLD Module import syntax of Node, called CommonJS way.
// const ext_funcs = require("./exporter");
// ext_funcs.action();
// ext_funcs.work();

// The modern way to import modules
// IMP - Jis bhi file me mai modern way ka use kar raha hu modules use karne ke liye inside Node then those files must have extension of .mjs
import {action, work} from "./exporter.mjs";
action();
work();