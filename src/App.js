import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const completed = items.filter((item) => item.completed == true).length;

  return (
    <div className="App">
      <div className="container">
        <div className="todo-container">
          <h1>todo</h1>
          <p>{`${completed} completed`}</p>
          <div className="input">
            <form
              className="todoForm"
              onSubmit={(ev) => {
                ev.preventDefault();
                const updatedItems = [
                  ...items,
                  {
                    completed: false,
                    label: value,
                  },
                ];
                setItems(updatedItems);
                setValue('');
              }}
            >
              <input
                type="text"
                id="todoInput"
                value={value}
                onChange={(ev) => {
                  setValue(ev.target.value);
                }}
              />

              <button id="addTodo">OK</button>
            </form>
          </div>

          <small className=""></small>

          <ul>
            {items.map((item, index) => {
              const className = item.completed ? 'completed' : '';
              return (
                <li
                  key={index}
                  className={className}
                  onClick={() => {
                    const updatedItems = items.map((oldItem, oldIndex) => {
                      return {
                        completed:
                          oldIndex === index
                            ? !oldItem.completed
                            : oldItem.completed,
                        label: oldItem.label,
                      };
                    });
                    setItems(updatedItems);
                  }}
                >
                  <span>{item.label}</span>
                  <button
                    className="todoList__deleteButton"
                    onClick={(event) => {
                      event.stopPropagation();
                      const updatedItems = items.filter((_, itemIndex) => {
                        return itemIndex !== index;
                      });
                      setItems(updatedItems);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
