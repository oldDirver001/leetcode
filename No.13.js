/**
 * leetcode 第13题 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
/**
 * ### 解题思路
 首先列出所有的罗马字符组合，封装为一个对象
 其次将输入的字符串切割成字符数组，遍历该数组，用变量记录当前字符。若当前字符是 I、X、C，则需要判断下一个字符（下标加1）
 是否能组成【IV、IX、XL、XC、CD、CM】当中的组合，如果能组成组合，则更新变量为新的组合字符，并且下标需要加1。
 再次，根据第一步的对象，拿到当前字符或者当前组合字符的值，累加，即可。
 最后，需要注意遍历下标的变化，这里用了while，便于修改下标。

 ### 代码
 */
let romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }

  const array = s.split('')
  const len = s.length
  let count = 0
  let sum = 0
  while (count < len) {
    let temp = array[count]
    const next = count + 1 // 下一个字符的下标
    switch (array[count]) { // array[count] 当前字符
      case 'I':
        switch (array[next]) { // array[next] 下一个字符
          case 'V':
            temp = 'IV'
            ++count
            break
          case 'X':
            temp = 'IX'
            ++count
            break
        }
        break
      case 'X':
        switch (array[next]) {
          case 'L':
            temp = 'XL'
            ++count
            break
          case 'C':
            temp = 'XC'
            ++count
            break
        }
        break
      case 'C':
        switch (array[next]) {
          case 'D':
            temp = 'CD'
            ++count
            break
          case 'M':
            temp = 'CM'
            ++count
            break
        }
        break

    }
    sum += obj[temp]
    ++count
  }
  return sum
}

console.log(romanToInt('LVIII'))
