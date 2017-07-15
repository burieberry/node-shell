var fs = require('fs');
var request = require('request');

function pwd(filename, done) {
  done(process.cwd() + '\n');
}

function date(filename, done) {
  done(Date().toString() + '\n');
}

function ls(filename, done) {
  var output = '';
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      output += file.toString() + '\n';
    });
    done(output);
  });
}

function echo(filename, done) {
  if (filename[0] === '$PATH')
    done(process.env.PATH + ' ' + filename.slice(1).join(' ') + '\n');
  else
    done(filename.join(' ') + '\n');
}

function cat(filename, done) {
  filename.forEach(function(file) {
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) throw err;
      else done(data);
    });
  });
}

function head(filename, done) {
  var _numLines = 5;
  filename.forEach(function(file) {
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) throw err;
      else done(data.split('\n').slice(0, _numLines).join('\n') + '\n');
    });
  });
}

function tail(filename, done) {
  var _numLines = -5;
  filename.forEach(function(file) {
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) throw err;
      else done(data.split('\n').slice(_numLines).join('\n') + '\n');
    });
  });
}

function curl(filename, done) {
  request(filename[0], function (error, response, body) {
  done('error:' + error + '\n' +
       // Print the error if one occurred
       // Print the response status code if a response was received
      'statusCode:' + response && response.statusCode + '\n' +
      // Print the HTML
      'body:' + body + '\n');
  });
}

module.exports = {
  pwd: pwd,
  date: date,
  ls: ls,
  echo: echo,
  cat: cat,
  head: head,
  tail: tail,
  curl: curl
};
