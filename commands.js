function pwd() {
  process.stdout.write('\n' + process.cwd());
}

function date() {
  process.stdout.write('\n' + Date().toString());
}

module.exports = {
  pwd: pwd,
  date: date
};
