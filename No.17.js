/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  // digits是一个只包含2~9数字的字符串，例如：232323
  if (!digits) {
    return []
  }
  digits = digits.split('')
  const dLen = digits.length
  const AlphanumericMapping = [
    undefined,
    undefined,
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
  ]
  // 获取每个数字所对应的字母
  let letterArr = digits.map(_ => {
    return AlphanumericMapping[_]
  })
  letterArr = letterArr.reverse()
  let temp = []
  let result = letterArr.splice(0, 1)[0]
  letterArr.forEach((item) => {
    item.forEach(_ => {
      result.forEach(r => {
        temp.push(_ + r)
      })
    })
    result = [].concat(temp)
  })
  return result.filter(_ => _.length === dLen)
};
console.log(letterCombinations(''))