// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)



const user = require('./3_user-module');
const sayHello = require('./3_util-modules');

console.log(user.user)
console.log(user.marks);

sayHello(user.user.name);