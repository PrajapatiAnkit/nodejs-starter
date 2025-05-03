const os = require('os');

// info about current user
console.log(os.userInfo())

console.log(`Host name is: ${os.hostname()}`);
console.log(`Plateform is: ${os.platform()}`);

console.log(`OS release: ${os.release()}`);
