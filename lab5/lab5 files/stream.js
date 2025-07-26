const fs = require('fs');

const filesteam = fs.createReadStream('log.txt','utf-8');
// const fs = require('fs');

let readfiledata = '';

filesteam.on('data', (chunk) => {
  readfiledata += data;
});

filesteam.on('end', (data) => {
  console.log('File read completed');
})

filesteam.on('error', () => {
  console.error('Error reading file');
});

filesteam.on('open', () => {
  console.log('File opened successfully');
})

filesteam.on('close', () => {
  console.log('File closed successfully');
})