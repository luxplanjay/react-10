import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TaskListItem from './TaskListItemContainer';
import './TaskList.css';
import tasksSelectors from '../redux/tasks/tasksSelectors';

const TaskList = ({ tasks }) => {
  return (
    <TransitionGroup component="ul" className="TaskList">
      {tasks.map(({ id }) => (
        <CSSTransition key={id} timeout={250} classNames="TaskList-item-fade">
          <TaskListItem id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = state => ({
  tasks: tasksSelectors.getVisibleTasks(state),
});

export default connect(mapStateToProps)(TaskList);
