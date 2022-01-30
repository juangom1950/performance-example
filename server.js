const express = require('express');
//const cluster = require('cluster');
//const os = require('os');

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while(Date.now() - startTime < duration) {
    //event loop is blocked...
  }
}

app.get('/', (req, res) => {
  // This functions can slow performance
  // Comverts an object into a string representation
  //JSON.stringify({}) => "{}"
  // It takes a string object and converted into a javascriipt object
  //JSON.parse("{}") => {}
  // [2,3,4,5,].sort()
  res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
  // Our server can't do enything else until this delay func is executed.
  delay(4000);
  res.send(`Beep beep beep! ${process.pid}`);
});

console.log('Running server.js...');
console.log('Worker process started.');
app.listen(3000);

// if (cluster.isMaster) {
//   console.log('Master has been started...');
//   // This is total number of cores in our serfer machine
//   const NUMB_WORKERS = os.cpus().length;
//   for (let i = 0; i < NUMB_WORKERS; i++) {
//     cluster.fork();
//   }
//   // Create a cluster. Here we are creating 2
//   // We can create as many as we want
//   // Here we can only handle two processes at the time.
//   //cluster.fork();
//   //cluster.fork();
// } else {
//   console.log('Worker process started.');
//   app.listen(3000);
// }