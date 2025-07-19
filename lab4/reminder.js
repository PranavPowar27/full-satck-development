// reminder.js
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'reminders.txt');

function setReminder(task, seconds) {
  const entry = `Task: ${task}, Time: ${seconds} seconds\n`;
  fs.appendFileSync(filePath, entry, 'utf8');

  console.log(` Reminder set for "${task}" in ${seconds} seconds`);
  setTimeout(() => {
    console.log(` Reminder: "${task}" is due!`);
  }, seconds * 1000);
}

function viewReminders() {
  if (!fs.existsSync(filePath)) return console.log(' No reminders found.');
  const data = fs.readFileSync(filePath, 'utf8');
  console.log('\n Saved Reminders:\n' + data);
}

module.exports = { setReminder, viewReminders };