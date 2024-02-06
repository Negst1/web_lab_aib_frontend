import { useEffect, useState } from "react";
import DayItem from "./DayItem";
import styled from "styled-components";

const ListContainer = styled.div`
  display: grid;
  max-width: 800px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const DayList = ({ events, del }) => {
  console.log(events);
  return (
    <ListContainer>
      {events.map((item) => (
        <DayItem key={item.id} event={item} del={del} />
      ))}
    </ListContainer>
  );
};

export default DayList;
