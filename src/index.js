
exports.min = function min (array) {
  return !Array.isArray(array) || array.length === 0 ? 0 : Math.min(...array);
}

exports.max = function max (array) {
    return 0;
}

exports.avg = function avg (array) {
    return 0;
}
