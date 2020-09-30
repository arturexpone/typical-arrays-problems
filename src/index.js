
exports.min = function min (array) {
  return !Array.isArray(array) || array.length === 0 ? 0 : Math.min(...array);
}

exports.max = function max (array) {
    return !Array.isArray(array) || array.length === 0 ? 0 : Math.max(...array);
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array.length === 0) return 0;
  return array.reduce((acc, num) => acc + num, 0) / array.length;
}
