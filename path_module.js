const path = require("path");
console.log(__dirname);
console.log(__filename);


//school folder
const filePath = path.join("folder", "students", "data.txt");
console.log(filePath);
const p = path.parse(filePath);
const r= path.resolve(filePath);
const e = path.extname(filePath);
const b = path.basename(filePath);
const d = path.dirname(filePath);
console.log({p, r, e, b, d});
