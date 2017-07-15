var fs = require('fs');

function pwd() {
  process.stdout.write('\n' + process.cwd());
}

function date() {
  process.stdout.write('\n' + Date().toString());
}

function ls() {
  fs.readdir('.', function(err, files) {
    if(err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + '\n');
    });
    process.stdout.write('prompt > ');
  });
}

module.exports = {
  pwd: pwd,
  date: date,
  ls: ls
};
