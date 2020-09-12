import React from "react";
import styled from "styled-components";
import Cell from "components/Cell";

const RowWrapper = styled.div`
  display: flex;
`;

const Row = (props) => {
  const { row } = props;
  return (
    <RowWrapper>
      {row.map((eaCell) => {
        return <Cell cell={eaCell} />;
      })}
    </RowWrapper>
  );
};

export default Row;
