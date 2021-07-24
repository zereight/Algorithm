const isValidPoint = (board, x, y) => {
  const m = board.length;
  const n = board[0].length;

  return 0 <= x && x < m && 0 <= y && y < n;
};
