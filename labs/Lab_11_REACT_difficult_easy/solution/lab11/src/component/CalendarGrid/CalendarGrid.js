import moment from "moment";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../style.css";
import "moment/locale/ru";

const GridWrapper = styled.div`
  display: grid;
  ${"" /* grid-template-rows: repeat(6, 1fr); */}
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: white;
`;

const CellWrapper = styled.div`
  min-width: 140px;
  min-height: ${(props) => (props.isHeader ? 24 : 90)}px;
  background-color: ${(props) =>
    props.isWeekend ? "#bc13fe" : props.isCurrent ? "#bc13fe" : "#bc13fe"};
  ${"" /* color: ${(props) => (props.isCurrent ? "#ffffff" : "#817c7f")}; */}
  color: ${(props) =>
    props.isSelectMonth ? "white" : props.isCurrent ? "white" : "white"};

  position: relative;
`;

const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  position: relative;
`;

const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const DayWeek = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  color: #6a44ae;
`;

const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const EventListWrapper = styled.ul`
  margin: unset;
  list-style-postition: inside;
  padding-left: 4px;
`;
const EventLiWrapper = styled.li`
  font-size: 12px;
  padding: 2px;
  border: 1px solid #6d35d1;
  color: 
  margin-right: 2px;
  margin-bottom: 2px;
  border-radius: 4px;
  position: relative;
`;

const EventNumWrapper = styled.div`
  position: absolute;
  color: #3d554a;
  right: 2px;
  font-size: 15px;
`;

const CalendarGrid = ({ startDay, today, events, openFormHand }) => {
  const day = startDay.clone().subtract(1, "day");
  const totalDays = 42;
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
  const weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectMonth = (day) => today.isSame(day, "month");
  const isFilterEvents = (day) => {
    if (events?.length !== undefined) {
      return events.filter((event) => {
        return (
          event.date >= day.format("X") &&
          event.date <= day.clone().endOf("day").format("X")
        );
      });
    }
    return [];
  };

  console.log(daysArray);
  console.log(events);
  return (
    <GridWrapper>
      {weekDays.map((item, i) => (
        <CellWrapper key={`header-${i}`} isHeader>
          <RowInCell justifyContent={"flex-end"}>
            <DayWeek>{item}</DayWeek>
          </RowInCell>
        </CellWrapper>
      ))}
      {daysArray.map((dayItem) => (
        <CellWrapper
          key={dayItem.format("YYYY-MM-DD")}
          isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
          isCurrent={isCurrentDay(dayItem)}
          isSelectMonth={isSelectMonth(dayItem)}
        >
          <Link
            to={`/day/${dayItem.format("X")}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <RowInCell justifyContent={"flex-end"}>
              <ShowDayWrapper>
                <DayWrapper>{dayItem.format("D")}</DayWrapper>
              </ShowDayWrapper>
              {/* <div>S: {dayItem.format("X")}</div> */}
              <EventListWrapper>
                {(() => {
                  const filteredEvents = isFilterEvents(dayItem);
                  if (filteredEvents.length > 2) {
                    return (
                      <>
                        {filteredEvents.slice(0, 2).map((event) => (
                          <EventLiWrapper key={event.id}>
                            {event.title}
                          </EventLiWrapper>
                        ))}
                        <EventNumWrapper>
                          +{filteredEvents.length - 2}
                        </EventNumWrapper>
                      </>
                    );
                  } else {
                    return filteredEvents.map((event) => (
                      <EventLiWrapper key={event.id}>
                        {event.title}
                      </EventLiWrapper>
                    ));
                  }
                })()}
              </EventListWrapper>
            </RowInCell>
          </Link>
        </CellWrapper>
      ))}
    </GridWrapper>
  );
};

export default CalendarGrid;
