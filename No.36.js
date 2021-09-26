/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 把数字放到Set当中，如果Set.size小于9，表示有重复的数字。
// 二维数组分组：[0, 1, 2], [3, 4, 5], [6, 7, 8]，两两组合可得数独下标范围。
const isValidSudoku = function(board) {
  let set = new Set()
  let len = -1
  let rowPass = false
  let colPass = false
  let gridPass = false
  const gridMap = [
    [board[0][0], board[0][1], board[0][2], board[1][0], board[1][1], board[1][2], board[2][0], board[2][1], board[2][2]],
    [board[0][3], board[0][4], board[0][5], board[1][3], board[1][4], board[1][5], board[2][3], board[2][4], board[2][5]],
    [board[0][6], board[0][7], board[0][8], board[1][6], board[1][7], board[1][8], board[2][6], board[2][7], board[2][8]],
    [board[3][0], board[3][1], board[3][2], board[4][0], board[4][1], board[4][2], board[5][0], board[5][1], board[5][2]],
    [board[3][3], board[3][4], board[3][5], board[4][3], board[4][4], board[4][5], board[5][3], board[5][4], board[5][5]],
    [board[3][6], board[3][7], board[3][8], board[4][6], board[4][7], board[4][8], board[5][6], board[5][7], board[5][8]],
    [board[6][0], board[6][1], board[6][2], board[7][0], board[7][1], board[7][2], board[8][0], board[8][1], board[8][2]],
    [board[6][3], board[6][4], board[6][5], board[7][3], board[7][4], board[7][5], board[8][3], board[8][4], board[8][5]],
    [board[6][6], board[6][7], board[6][8], board[7][6], board[7][7], board[7][8], board[8][6], board[8][7], board[8][8]]
  ]

  const isOK = (set = new Set(), len = -1) => {
    return set.size === len
  }

  const resultOfRow = board.map(_ => {
    set.clear()
    const withoutSign = _.filter(_ => _ !== '.')
    len = withoutSign.length
    withoutSign.forEach(n => {
      set.add(n)
    })
    return isOK(set, len)
  })
  rowPass = resultOfRow.every(item => item)

  const loopCol = (board) => {
    const resutlOfCol = []
    for (let i = 0; i < 9; i++) {
      let arr = board.map(_ => _[i]).filter(item => item !== '.')
      set = new Set(arr)
      len = arr.length
      resutlOfCol.push(isOK(set, len))
    }
    return resutlOfCol
  }
  colPass = loopCol(board).every(item => item)
  const loopGrid = (gridMap) => {
    const resutlOfGrid = []
    for (let i = 0; i < 9; i++) {
      let arr = gridMap[i].filter(item => item !== '.')
      set = new Set(arr)
      len = arr.length
      resutlOfGrid.push(isOK(set, len))
    }
    return resutlOfGrid
  }
  gridPass = loopGrid(gridMap).every(item => item)
  return rowPass && colPass && gridPass
};
const test1 = [
  ["7",".",".",".","4",".",".",".","."],
  [".",".",".","8","6","5",".",".","."],
  [".","1",".","2",".",".",".",".","."],
  [".",".",".",".",".","9",".",".","."],
  [".",".",".",".","5",".","5",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".","2",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."]
]
console.log('isValidSudoku(test1)', isValidSudoku(test1))