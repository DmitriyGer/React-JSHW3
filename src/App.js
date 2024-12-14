import React from 'react';
import TemperatureConverter from './TemperatureConverter';
import TodoList from './TodoList';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Приложения с использованием Material UI</h1>
      
      <h2>Температурный конвертер</h2>
      <TemperatureConverter />
      
      <h2>Список дел</h2>
      <TodoList />
    </div>
  );
}

export default App;

