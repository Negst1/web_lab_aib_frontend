import React from 'react';
import UserPosts from './task2/index'; // Путь до UserPosts.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserPosts /> {/* Используйте компонент UserPosts здесь */}
      </header>
    </div>
  );
}

export default App;