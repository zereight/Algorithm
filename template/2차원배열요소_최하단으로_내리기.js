const 블럭아래로_내리기 = (board) => {
  for (let colIndex = 0; colIndex < board[0].length; colIndex++) {
    const colArr = board.map((row) => row[colIndex]);
    const notEmptyArr = colArr.filter((elem) => elem !== -1);
    const emptyLength = colArr.length - notEmptyArr.length;
    const newColArr = [
      ...Array.from({ length: emptyLength }, () => -1),
      ...notEmptyArr,
    ];

    board.forEach((row, rowIndex) => {
      row[colIndex] = newColArr[rowIndex];
    });
  }

  return board;
};
