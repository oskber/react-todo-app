import { useState } from 'react';

export default function TaskInput({ onCreateItem }) {
  const [text, setText] = useState('');

  return (
    <div className="input">
      <form
        className="todoForm"
        onSubmit={(ev) => {
          ev.preventDefault();
          const newItem = {
            completed: false,
            label: text,
          };
          if (!text) return;
          onCreateItem(newItem);
          setText('');
        }}
      >
        <input
          type="text"
          id="todoInput"
          value={text}
          onChange={(ev) => {
            setText(ev.target.value);
          }}
        />

        <button id="addTodo">OK</button>
      </form>
    </div>
  );
}
