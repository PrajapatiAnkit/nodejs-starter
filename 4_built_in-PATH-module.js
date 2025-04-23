const path = require('path');

console.log(`Seprator is: ${path.sep}`);

const filepath = path.join('content', 'api', 'test.txt');
console.log(`File path is: ${filepath}`)

const basename = path.basename(filepath);
console.log(`File basename is: ${basename}`)

const absoultePath = path.resolve(__dirname, 'content', 'api', 'test.txt');
console.log(absoultePath);

