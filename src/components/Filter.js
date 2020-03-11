import React from 'react';
import { connect } from 'react-redux';
import tasksActions from '../redux/tasks/tasksActions';
import tasksSelectors from '../redux/tasks/tasksSelectors';

const Filter = ({ value, onChangeFilter }) => (
  <div>
    <input
      type="text"
      className="TaskEditor-input"
      value={value}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </div>
);

const mapStateToProps = state => ({
  value: tasksSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: tasksActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
