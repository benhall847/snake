import React from "react";
import GlobalContext from "GlobalContext";
import styled from "styled-components";
import Row from "components/Row";

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const keyHandler = (e, dispatch) => {
  switch (e.key) {
    case "ArrowUp":
      dispatch("SET_DIRECTION", "UP");
      break;
    case "ArrowDown":
      dispatch("SET_DIRECTION", "DOWN");
      break;
    case "ArrowLeft":
      dispatch("SET_DIRECTION", "LEFT");
      break;
    case "ArrowRight":
      dispatch("SET_DIRECTION", "RIGHT");
      break;
    default:
      break;
  }
};

const Snake = () => {
  const { state, dispatch } = React.useContext(GlobalContext);
  const { board } = state;

  React.useEffect(() => {
    document.body.addEventListener("keydown", (e) => {
      keyHandler(e, dispatch);
    });
    setInterval(function () {
      dispatch("GAME_LOOP");
    }, 200);
  }, []);

  return (
    <BoardWrapper>
      {board.map((eaRow) => (
        <Row row={eaRow} />
      ))}
    </BoardWrapper>
  );
};

export default Snake;
