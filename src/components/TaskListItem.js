import React from 'react';

const TaskListItem = ({ text, completed, onRemove, onToggleCompleted }) => {
  const clx = ['TaskList-item'];

  if (completed) {
    clx.push('completed');
  }

  return (
    <li className={clx.join(' ')}>
      <p className="TaskList-text">{text}</p>

      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggleCompleted}
        />
        Completed
      </label>

      <section className="TaskList-actions">
        <button type="button" className="TaskList-button" onClick={onRemove}>
          Удалить
        </button>
      </section>
    </li>
  );
};

export default TaskListItem;
