import Header from "../component/Header/Header";
import Monitor from "../component/Monitor/Monitor";
import CalendarGrid from "../component/CalendarGrid/CalendarGrid";
import "../style.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
const ContainerWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid #847b7e;
  box-shadow: 0 0 0 1px #1a1a1a, 0 0px 3px 2px #000;
`;

const Main = ({
  today,
  prevHendler,
  todayHendler,
  nextHendler,
  startDay,
  events,
  openFormHand,
}) => {
  return (
    <ContainerWrapper>
      <Header />
      <Monitor
        today={today}
        prevHendler={prevHendler}
        todayHendler={todayHendler}
        nextHendler={nextHendler}
      />
      <CalendarGrid
        startDay={startDay}
        today={today}
        events={events}
        openFormHand={openFormHand}
      />
    </ContainerWrapper>
  );
};

export default Main;
