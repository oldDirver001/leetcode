/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let add = 0;
  let sub = 0;
  operations.forEach(o => {
    if (o.indexOf('++') > -1) {
      add++;
    } else if (o.indexOf('--') > -1) {
      sub++;
    }
  });
  return add - sub;
};
console.log(finalValueAfterOperations(['++X', '++X', 'X++']));
