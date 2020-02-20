
exports.min = function min (array) {
  if (array === undefined){
    return 0;
  }
  return array.length > 0 ? Math.min(...array) : 0;
}

exports.max = function max (array) {
  if (array === undefined){
    return 0;
  } 
  return (array.length > 0 ? Math.max(...array) : 0);
}

exports.avg = function avg (array) {
  if (array === undefined){
    return 0;
  } 
  return array.reduce((acc, cur) => acc + cur, 0) / array.length || 0;
}
