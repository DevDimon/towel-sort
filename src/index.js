
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 > 0) {
        result.push(...matrix[i].reverse());
    } else {
        result.push(...matrix[i]);
    }
  }
  return result;
}
