import React, { useState } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: white;
  }

  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #8e44ad;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #6c3483;
  }
`;

const PostForm = ({ create, startDate }) => {
  const [event, setEvent] = useState({ title: "", description: "", date: "" });
  const [time, setTime] = useState(null);

  const timeToSeconds = (time) => {
    if (!time) return 0;

    const [hours, minutes] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60;
  };

  const AddEvent = (e) => {
    e.preventDefault();
    if (event.title && event.description && time) {
      const seconds = timeToSeconds(time ? time.format("HH:mm") : "");
      const newEvent = {
        id: Date.now(),
        ...event,
        date: Number(startDate) + Number(seconds),
      };
      create(newEvent);
      setEvent({ title: "", description: "" });
      setTime(null);
    }
  };

  return (
    <Container>
      <form onSubmit={AddEvent}>
        <FormGroup>
          <Label htmlFor="title">Название заметки:</Label>
          <StyledInput
            id="title"
            type="text"
            value={event.title}
            onChange={(e) => setEvent({ ...event, title: e.target.value })}
            placeholder="Введите название заметки"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Описание заметки:</Label>
          <StyledInput
            id="description"
            type="text"
            value={event.description}
            onChange={(e) =>
              setEvent({ ...event, description: e.target.value })
            }
            placeholder="Введите описание заметки"
          />
        </FormGroup>
        <FormGroup>
          <Label>Выберите время:</Label>
          <TimePicker
            showSecond={false}
            defaultValue={time}
            onChange={(value) => setTime(value)}
            format="HH:mm"
          />
        </FormGroup>
        <Button type="submit">Добавить</Button>
      </form>
    </Container>
  );
};

export default PostForm;
