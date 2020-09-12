import React from "react";
import "assets/App.css";
import GlobalContext from "GlobalContext";
import Snake from "components/Snake";
import styled from "styled-components";

const SnakeWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  color: green;
`;

const App = () => {
  const { state, dispatch } = React.useContext(GlobalContext);

  const keyHandler = (e) => {
    dispatch("SET_DISPLAY", true);
  };
  React.useEffect(() => {
    document.body.addEventListener("keydown", (e) => {
      keyHandler(e);
    });
  }, []);
  return (
    <SnakeWrapper>
      <Title>SNAKE YOOOOOO</Title>
      {state.displaySnake && <Snake />}
    </SnakeWrapper>
  );
};

export default App;
