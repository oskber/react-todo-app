import TaskItem from './TaskItem';

export default function TaskList({ items, onToggleItem, onDeleteItem }) {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <TaskItem
            key={index}
            item={item}
            onToggle={() => {
              onToggleItem(index);
            }}
            onDelete={() => {
              onDeleteItem(index);
            }}
          />
        );
      })}
    </ul>
  );
}
