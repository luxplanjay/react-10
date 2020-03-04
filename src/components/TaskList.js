import React from 'react';
import { connect } from 'react-redux';
import TaskListItem from './TaskListItem';
import './TaskList.css';

const TaskList = ({ tasks }) => (
  <ul className="TaskList">
    {tasks.map(({ id }) => (
      <TaskListItem key={id} id={id} />
    ))}
  </ul>
);

const mapStateToProps = state => {
  const { items, filter } = state.tasks;
  const normalizedFilter = filter.toLowerCase();

  const visibleTasks = items.filter(task =>
    task.text.toLowerCase().includes(normalizedFilter),
  );

  return {
    tasks: visibleTasks,
  };
};

export default connect(mapStateToProps)(TaskList);
