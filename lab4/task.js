// index.js
const readline = require('readline');
const { setReminder, viewReminders } = require('./reminder');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log('\n Reminder App');
  console.log('1️ Add Reminder');
  console.log('2️ View Reminders');
  console.log('3️ Quit\n');

  rl.question('Choose an option: ', (input) => {
    switch (input.trim()) {
      case '1':
        rl.question(' Enter task: ', (task) => {
          rl.question(' Enter time in seconds: ', (secInput) => {
            const seconds = parseInt(secInput);
            if (!task || isNaN(seconds)) {
              console.log(' Invalid input. Try again.');
              showMenu();
            } else {
              setReminder(task, seconds);
              showMenu();
            }
          });
        });
        break;
      case '2':
        viewReminders();
        showMenu();
        break;
      case '3':
        console.log();
        rl.close();
        break;
      default:
        console.log(' Invalid choice. Try again.');
        showMenu();
    }
  });
}

showMenu();