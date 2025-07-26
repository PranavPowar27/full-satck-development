
const fs = require('fs');

const inputFile = 'log.txt';
const outputFile = 'log_backup.txt';
const fileSize = fs.statSync(inputFile).size;

let filesCopied = 0;

const streamin = fs.createReadStream(inputFile);
const streamout = fs.createWriteStream(outputFile);

streamin.pipe(streamout);

streamin.on('data', (chunk) => {
  filesCopied += chunk.length;
  const percent = ((filesCopied / fileSize) * 100).toFixed(2);
  console.log(`Progress: ${percent}%`);
});

streamin.on('end', () => {
  console.log(' File transfer completed');
});

streamin.on('error', () => {
  console.error('An error occurred while reading');
});

streamout.on('error', () => {
  console.error(' Error occurred during writing');
});