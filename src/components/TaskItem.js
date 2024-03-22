export default function TaskItem({ item, onToggle, onDelete }) {
  const className = item.completed ? 'completed' : '';

  return (
    <li className={className} onClick={onToggle}>
      <span>{item.label}</span>
      <button
        className="todoList__deleteButton"
        onClick={(event) => {
          event.stopPropagation();
          onDelete();
        }}
      >
        Delete
      </button>
    </li>
  );
}
