import React from 'react';
import TaskListItem from '../TaskListItem';
import './TaskList.css';

const TaskList = ({ tasks, onRemoveTask, onUpdateTask }) => (
  <ul className="TaskList">
    {tasks.map(({ id, text, completed }) => (
      <TaskListItem
        key={id}
        text={text}
        completed={completed}
        onRemove={() => onRemoveTask(id)}
        onUpdate={() => onUpdateTask(id)}
      />
    ))}
  </ul>
);

export default TaskList;
