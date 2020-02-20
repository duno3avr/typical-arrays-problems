
exports.min = function min (array) {
  return array.length > 0 ? Math.min(...array) : 0;
}

exports.max = function max (array) {
  return (array.length > 0 ? Math.max(...array) : 0);
}

exports.avg = function avg (array) {
  return array.reduce((acc, cur) => acc + cur) / array.length || 0;
}
