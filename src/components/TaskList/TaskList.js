import React from 'react';
import TaskListItem from '../TaskListItem';
import './TaskList.css';

const TaskList = ({ tasks, onRemoveTask }) => (
  <ul className="TaskList">
    {tasks.map(({ id, text }) => (
      <TaskListItem key={id} text={text} onRemove={() => onRemoveTask(id)} />
    ))}
  </ul>
);

export default TaskList;
