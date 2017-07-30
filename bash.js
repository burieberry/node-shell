var commands = require('./commands');
var stdin = process.stdin;
var stdout = process.stdout;

// Output a prompt
stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
stdin.on('data', function(data) {
  var cmdList = data.toString().trim().split(/\s*\|\s*/g);
  var cmd = cmdList[0].split(' ');
  cmdList = cmdList.slice(1);

  var fn = cmd[0], // gets the function name
      filename = cmd.slice(1); // gets the argument(s)

  if (fn) commands[fn](stdin, filename, done);
  else stdout.write('prompt > ');
});

function done(output) {
  // if (cmdlist.length) {
  //   cmdlist.forEach(function(cmd) {
  //     cmd + ' | ';
  //   });

  //   cmdlist = cmdlist.join(' | ');
  //   stdin.on(cmdlist);
  // }
  stdout.write(output);
  stdout.write('prompt > ');
}
