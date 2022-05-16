// OS MODULE

const os = require("os");

// info about the current user
const user = os.userInfo();
// method returns the system uptime
const uptime = os.uptime();

console.log(user);
console.log(`The system uptime is : ` + uptime);

const currentOS = {
  name: os.type,
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
