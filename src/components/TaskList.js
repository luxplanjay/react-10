import React from 'react';
import { connect } from 'react-redux';
import TaskListItem from './TaskListItemContainer';
import './TaskList.css';
import tasksSelectors from '../redux/tasks/tasksSelectors';

const TaskList = ({ tasks }) => {
  console.log('TaskList re-render');

  return (
    <ul className="TaskList">
      {tasks.map(({ id }) => (
        <TaskListItem key={id} id={id} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  tasks: tasksSelectors.getVisibleTasks(state),
});

export default connect(mapStateToProps)(TaskList);
