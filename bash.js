var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  var cmd = data.toString().trim().split(' '); // remove the newline

  if (cmd[0] === 'pwd') commands.pwd();
  if (cmd[0] === 'date') commands.date();
  if (cmd[0] === 'ls') commands.ls();
  if (cmd[0] === 'echo') commands.echo(cmd.slice(1));
});

