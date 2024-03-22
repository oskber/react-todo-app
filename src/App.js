import React, { useState, useEffect } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskCount from './components/TaskCount';

function App() {
  const [items, setItems] = useState([]);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    handleCountItem(items);
  }, [items]);

  function handleCreateItem(newItem) {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
  }

  function handleToggleItem(index) {
    const updatedItems = items.map((oldItem, oldIndex) => {
      return {
        completed: oldIndex === index ? !oldItem.completed : oldItem.completed,
        label: oldItem.label,
      };
    });
    setItems(updatedItems);
  }
  function handleCountItem(items) {
    const completed = items.filter((item) => item.completed == true).length;
    setCompleted(completed);
  }

  function handleDeleteItem(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="todo-container">
          <h1>todo</h1>

          <small className=""></small>
          <TaskCount completed={completed} />
          <TaskInput onCreateItem={handleCreateItem} />
          <TaskList
            items={items}
            onToggleItem={handleToggleItem}
            onDeleteItem={handleDeleteItem}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
