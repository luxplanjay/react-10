import React from 'react';

export default function TaskEditor({ onAddTask }) {
  return (
    <div className="TaskEditor">
      <button type="button" onClick={onAddTask}>
        Добавить таск
      </button>
    </div>
  );
}
