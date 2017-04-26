const path = require('path');

const base = path.resolve(__dirname, '..');

function root() {
  const args = Array.prototype.slice.call(arguments); // eslint-disable-line
  return path.join.apply(path, [base].concat(args)); // eslint-disable-line
}

exports.root = root;
