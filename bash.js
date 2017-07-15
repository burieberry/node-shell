var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  var cmd = data.toString().trim().split(' '); // remove the newline
  var fn = cmd[0],
    file = cmd.slice(1);
  commands[fn](file);
});
