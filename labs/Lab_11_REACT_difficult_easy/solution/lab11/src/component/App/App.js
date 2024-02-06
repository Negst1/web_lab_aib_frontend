import moment from "moment";
import "moment/locale/ru";
import Header from "../Header/Header";
import Monitor from "../Monitor/Monitor";
import CalendarGrid from "../CalendarGrid/CalendarGrid";
import "../../style.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Main from "../../pages/Main";
import Day from "../../pages/Day";
import Edit from "../../pages/Edit";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
const ContainerWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid black;
  box-shadow: 0 0 0 1px #1a1a1a, 0 0px 3px 2px #000;
`;

function App() {
  moment.locale("ru");

  console.log(moment());
  // window.moment = moment;
  moment.updateLocale("en", { week: { dow: 1 } });
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");
  const endDay = moment().endOf("month").endOf("week");

  const prevHendler = () => {
    setToday((prev) => prev.clone().subtract(1, "month"));
    console.log("prev");
  };
  const todayHendler = () => setToday(moment());
  const nextHendler = () => {
    setToday((next) => next.clone().add(1, "month"));
    console.log("prev");
  };
  // console.log(startDay.format("YYYY-MM-DD"));
  // console.log(endDay.format("YYYY-MM-DD"));
  // window.startDay = startDay;
  // window.endDay = startDay.clone();
  // const calendar = [];
  // const day = startDay;
  // while (!day.isAfter(endDay)) {
  //   calendar.push(day.clone());
  //   day.add(1, "day");
  // }
  // console.log(calendar);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Писать лабы",
      description: "С кайфом",
      date: 1703029205,
    },
    {
      id: 2,
      title: "Сдать сесию",
      description: "Для кайфа",
      date: 1703029305,
    },
    {
      id: 3,
      title: "Отметить нг",
      description: "В кайф",
      date: 1703029405,
    },
    {
      id: 4,
      title: "Погулять в парке ввп",
      description: "С друзьями",
      date: 1717199126,
    },
    {
      id: 5,
      title: "Погулять в парке",
      description: "С друзьями",
      date: 1706216399,
    },
  ]);
  const [sortevents, setSortEvents] = useState();
  const [eventUpdate, SetEventUpdate] = useState(null);
  const startQuery = startDay.clone().format("X");
  const endQuery = startDay.clone().add(42, "days").format("X");

  const createEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    console.log("CREATE");
    console.log(events);
  };

  const deleteEvent = (numDate) => {
    const filteredEvents = events.filter((event) => {
      return event.date != numDate;
    });
    console.log(numDate);
    setEvents(filteredEvents);
  };
  // console.log(events);
  // console.log(startQuery);
  // console.log(endQuery);
  useEffect(() => {
    console.log("USEEFFCT");
    const filteredEvents = events.filter((event) => {
      return event.date >= startQuery && event.date <= endQuery;
    });
    setSortEvents(filteredEvents);
  }, [today, events]);
  const openFormHand = (method, eventForUpDate) => {
    console.log("date", method);
    SetEventUpdate(eventForUpDate);
  };
  return (
    // <ContainerWrapper>
    //   <Header />
    //   <Monitor
    //     today={today}
    //     prevHendler={prevHendler}
    //     todayHendler={todayHendler}
    //     nextHendler={nextHendler}
    //   />
    //   <CalendarGrid
    //     startDay={startDay}
    //     today={today}
    //     events={sortevents}
    //     openFormHand={openFormHand}
    //   />
    <BrowserRouter>
      {/* <Link to="/">Main</Link> */}
      <Routes>
        <Route
          path="/"
          element={
            <Main
              today={today}
              prevHendler={prevHendler}
              todayHendler={todayHendler}
              nextHendler={nextHendler}
              startDay={startDay}
              events={sortevents}
              openFormHand={openFormHand}
            />
          }
        />
        <Route
          path="/day/:idday"
          element={
            <Day events={events} create={createEvent} del={deleteEvent} />
          }
        />
        <Route path="/edit/:id" element={<Edit events={events} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
