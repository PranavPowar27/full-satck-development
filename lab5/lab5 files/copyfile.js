// copyfile.js
const fs = require('fs');

const streamin = fs.createReadStream('log.txt', 'utf-8');
const streamout = fs.createWriteStream('log_backup.txt', 'utf-8');


streamin.pipe(streamout);


streamin.on('data', (data) => {
  console.log('progress: ' + data.length);
});


streamin.on('end', () => {
  console.log('File transfer completed');
});


streamin.on('error', () => {
  console.error('An error occurred while reading');
});


streamout.on('error', () => {
  console.error('Error occurred during writing');
});