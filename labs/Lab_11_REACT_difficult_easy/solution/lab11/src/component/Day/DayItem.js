import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";

const ItemContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ItemTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

const ItemDescription = styled.p`
  margin-bottom: 10px;
`;

const ActionLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-right: 10px;
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: white;
  }
`;

const DayItem = ({ event, del }) => {
  const formatDate = moment.unix(event.date).format("MMMM D YYYY, h:mm:ss a");
  const deleteEvent = () => {
    del(event.date);
  };

  return (
    <ItemContainer>
      <p>{formatDate}</p>
      <ItemTitle>{event.title}</ItemTitle>
      <ItemDescription>{event.description}</ItemDescription>
      <DeleteButton onClick={deleteEvent}>Удалить</DeleteButton>
    </ItemContainer>
  );
};

export default DayItem;
