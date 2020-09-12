import initialState from "core/initalState";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_BOARD":
      return {
        ...state,
        board: action.payload,
      };

    case "SET_DISPLAY":
      return {
        ...state,
        displaySnake: action.payload,
      };
    case "SET_DIRECTION":
      const { previousDirection } = state.snake;
      const { payload } = action;
      if (
        (previousDirection === "UP" && payload === "DOWN") ||
        (previousDirection === "DOWN" && payload === "UP") ||
        (previousDirection === "RIGHT" && payload === "LEFT") ||
        (previousDirection === "LEFT" && payload === "RIGHT")
      ) {
        return state;
      }
      return {
        ...state,
        snake: {
          ...state.snake,
          currentDirection: action.payload,
        },
      };

    case "GAME_LOOP":
      const newBoard = state.board;
      const snakeLength = state.snake.body.length;
      const prevCell = state.snake.body[snakeLength - 1];

      const prevRow = prevCell[0];
      const prevColumn = prevCell[1];
      const newBody = state.snake.body;
      let displaySnake = true;

      let newCell = [];
      switch (state.snake.currentDirection) {
        case "UP":
          newCell[0] = state.snake.body[0][0] - 1;
          newCell[1] = state.snake.body[0][1];
          if (newBoard[newCell[0]] && newBoard[newCell[0]][newCell[1]]) {
            newBoard[newCell[0]][newCell[1]].snake = true;
          } else {
            displaySnake = false;
          }
          break;
        case "DOWN":
          newCell[0] = state.snake.body[0][0] + 1;
          newCell[1] = state.snake.body[0][1];
          if (newBoard[newCell[0]] && newBoard[newCell[0]][newCell[1]]) {
            newBoard[newCell[0]][newCell[1]].snake = true;
          } else {
            displaySnake = false;
          }
          break;

        case "LEFT":
          newCell[0] = state.snake.body[0][0];
          newCell[1] = state.snake.body[0][1] - 1;
          if (newBoard[newCell[0]] && newBoard[newCell[0]][newCell[1]]) {
            newBoard[newCell[0]][newCell[1]].snake = true;
          } else {
            displaySnake = false;
          }
          break;

        case "RIGHT":
          newCell[0] = state.snake.body[0][0];
          newCell[1] = state.snake.body[0][1] + 1;
          if (newBoard[newCell[0]] && newBoard[newCell[0]][newCell[1]]) {
            newBoard[newCell[0]][newCell[1]].snake = true;
          } else {
            displaySnake = false;
          }
          break;

        default:
          break;
      }
      if (newBoard[prevRow][prevColumn] && displaySnake) {
        if (!(newBoard[newCell[0]][newCell[1]].food === true)) {
          newBoard[prevRow][prevColumn].snake = false;
          newBody.pop();
        } else {
          newBoard[newCell[0]][newCell[1]].food = false;
          let column = Math.floor(Math.random() * 11);
          let row = Math.floor(Math.random() * 15);
          do {
            column = Math.floor(Math.random() * 11);
            row = Math.floor(Math.random() * 15);
            if (newBoard[row][column].snake === false) {
              newBoard[row][column].food = true;
            }
          } while (newBoard[row][column].snake === true);
        }
      }
      newBody.unshift(newCell);
      console.log(initialState);

      if (displaySnake) {
        return {
          ...state,
          board: newBoard,
          snake: {
            ...state.snake,
            body: newBody,
            previousDirection: state.snake.currentDirection,
          },
        };
      } else {
        return initialState;
      }

    default:
      return state;
  }
};

export default reducer;
