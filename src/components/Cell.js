import React from "react";
import styled from "styled-components";

const StyledCell = styled.div`
  border: 1px solid black;
  width: 30px;
  height: 30px;
  background-color: ${(props) =>
    props.cell.snake ? "red" : props.cell.food ? "green" : "white"};
`;

const Cell = (props) => {
  const { cell } = props;

  return <StyledCell cell={cell} />;
};

export default Cell;
