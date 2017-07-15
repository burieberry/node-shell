var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  var cmd = data.toString().trim().split(' '); // remove the newline
  var fn = cmd[0],
    filename = cmd.slice(1);

  if (fn) commands[fn](filename, done);
  else process.stdout.write('prompt > ');
});

function done(output) {
  process.stdout.write(output);
  process.stdout.write('prompt > ');
}
