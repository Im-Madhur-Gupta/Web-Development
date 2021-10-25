// Pehle fs me call backs chalte the async commands me, lekin newer versions me promises have been introduced. Promises ke sath async await ka use kiya ja sakta he.

import { readFile } from "fs/promises";
import { url } from "inspector";
// console.log(fs);

console.log(import.meta.url);
const template = await readFile(new URL("template.html"), import.meta.url);
