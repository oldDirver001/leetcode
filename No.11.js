/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let value = 0;
  let Y = 0;
  let X = 0;
  for (let index = 0; index < height.length; index++) {
    const item = height[index];
    if (index <= 0) continue;
    for (let i = 0; i < index; i++) {
      let a = Math.min(height[i], item); // 取小值作为高
      let b = index - i; // 下标之差作为长
      if (a <= Y && b <= X) continue
      let result = a * b; // 长 * 高 = 面积
      if (result > value) {
        Y = a
        X = b
        value = result;
      }
    }
  }
  return value;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
