const path = require('path');

console.log(path);

const filePath = path.join('/content/','subfolder','test.txt');
console.log(filePath);

const absolutePath =  path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolutePath);