const makeBoard = (x, y) => {
  let board = [];
  for (let row = 0; row < x; row++) {
    board[row] = [];
    for (let column = 0; column < y; column++) {
      const snakeBody = [9, 10, 11];

      if (column === 5 && snakeBody.includes(row)) {
        board[row][column] = {
          snake: true,
          food: false,
        };
      } else if (column === 5 && row === 4) {
        board[row][column] = {
          snake: false,
          food: true,
        };
      } else {
        board[row][column] = {
          snake: false,
          food: false,
        };
      }
    }
  }
  return board;
};

const initialState = {
  board: makeBoard(15, 11),
  displaySnake: false,
  food: [4, 5],
  snake: {
    currentDirection: "UP",
    previousDirection: "UP",
    body: [
      [9, 5],
      [10, 5],
      [11, 5],
    ],
  },
};

export default initialState;
