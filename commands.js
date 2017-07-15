var fs = require('fs');

function pwd() {
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
}

function date() {
  process.stdout.write(Date().toString());
  process.stdout.write('\nprompt > ');
}

function ls() {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + '\n');
    });
    process.stdout.write('prompt > ');
  });
}

function echo(argArr) {
  if (argArr[0] == '$PATH') {
    process.stdout.write(process.env.PATH);
    process.stdout.write(' ' + argArr.slice(1).join(' '));
  }
  else {
    process.stdout.write(argArr.join(' '));
  }
  process.stdout.write('\nprompt > ');
}

function cat(files) {
  files.forEach(function(file) {
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) throw err;
      else console.log(data);
      process.stdout.write('prompt > ');
    });
  });
}

module.exports = {
  pwd: pwd,
  date: date,
  ls: ls,
  echo: echo,
  cat: cat
};
