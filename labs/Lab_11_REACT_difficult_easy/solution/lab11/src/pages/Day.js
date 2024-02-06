import { useEffect, useState } from "react";
import moment from "moment";
import { useParams, Link } from "react-router-dom";
import DayList from "../component/Day/DayList";
import PostForm from "../component/Form/PostForm";
import styled from "styled-components";
moment.locale("ru");

const DayContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled(Link)`
  display: inline-block;
  padding: 8px 16px;
  margin-bottom: 16px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: white;
  }
`;

const Day = ({ events, create, del }) => {
  const { idday } = useParams();
  const startDate = moment.unix(idday).format("X");
  const endDate = moment.unix(idday).clone().endOf("day").format("X");
  const filteredEvents = events.filter((event) => {
    return event.date >= startDate && event.date <= endDate;
  });
  const formatDate = moment.unix(idday).format("MMMM D YYYY");

  return (
    <DayContainer>
      <BackButton to="/">Назад</BackButton>
      <p>{formatDate}</p>
      <div>
        <PostForm create={create} startDate={startDate} />
        <hr />
        <DayList events={filteredEvents} del={del} />
      </div>
    </DayContainer>
  );
};

export default Day;
