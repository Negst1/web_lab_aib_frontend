import React from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  color: #a086ce;
  padding: 16px;
`;

const TextWrapper = styled.span`
  font-size: 32px;
  margin-right: 8px;
`;

const ButtonWrapper = styled.button`
  border: unset;
  marin: 0 20px;
  border: 1px solid #9364e7;
  background-color: white;
  height: 20px;
  margin-right: 2px;
  border-radius: 2px;
  padding: 2px;
  color: #a086ce;
  min-width: 50px;
  cursor: pointer;
`;

const Monitor = ({ today, prevHendler, todayHendler, nextHendler }) => {
  return (
    <DivWrapper>
      <div>
        <TextWrapper>
          <b>{today.format("MMMM")}</b>
        </TextWrapper>
        <TextWrapper>{today.format("YYYY")}</TextWrapper>
      </div>
      <div>
        <ButtonWrapper onClick={prevHendler}>&lt;</ButtonWrapper>
        <ButtonWrapper onClick={todayHendler}>Сегодня</ButtonWrapper>
        <ButtonWrapper onClick={nextHendler}>&gt;</ButtonWrapper>
      </div>
    </DivWrapper>
  );
};

export default Monitor;
