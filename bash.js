// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  var cmd = data.toString().trim(); // remove the newline

  process.stdout.write('You typed: ' + cmd);

  if (cmd === 'pwd') {
    process.stdout.write('\n' + process.cwd());
  }

  if (cmd === 'date') {
    process.stdout.write('\n' + Date().toString());
  }

  process.stdout.write('\nprompt > ');
});

