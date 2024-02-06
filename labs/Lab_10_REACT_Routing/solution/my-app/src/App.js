import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { About } from './routes/About';

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        setPeople(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<UserList people={people} />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserDetails people={people} />} />
      </Routes>
    </>
  );
};

const UserList = ({ people }) => {
  return (
    <div>
      <h2>People</h2>
      <ul>
        {people.map((person) => (
          <li key={person.url}>
            <Link to={`/user/${extractId(person.url)}`}>{person.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const UserDetails = ({ people }) => {
  const { id } = useParams();
  const person = people.find((p) => extractId(p.url) === id);

  if (!person) {
    return <div>Person not found</div>;
  }

  return (
    <div>
      <p>ID: {extractId(person.url)}</p>
      <h2>{person.name}</h2>
      <p>Birth Year: {person.birth_year}</p>
    </div>
  );
};

const extractId = (url) => {
  const matches = url.match(/\/(\d+)\/$/);
  return matches ? matches[1] : null;
};

export default App;