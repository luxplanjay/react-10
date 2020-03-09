import React from 'react';
import { connect } from 'react-redux';
import tasksOperations from '../redux/tasks/tasksOperations';

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

const mapStateToProps = (state, ownProps) => {
  const item = state.tasks.items.find(item => item.id === ownProps.id);

  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(tasksOperations.removeTask(ownProps.id)),
  onToggleCompleted: () =>
    dispatch(tasksOperations.toggleCompleted(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListItem);
