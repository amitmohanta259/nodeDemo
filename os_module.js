const os = require('os');
const user = os.userInfo();
console.log(user);

//methods return system uptime is second

const currentOS = {
    name: os.type(),
    release : os.release(),
    totalMemmory : os.totalmem(),
    freeMomory : os.freemem()
}

console.log(currentOS);