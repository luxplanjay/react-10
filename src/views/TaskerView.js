import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskEditor from '../components/TaskEditor';
import Filter from '../components/Filter';
import TaskList from '../components/TaskList';
import tasksOperations from '../redux/tasks/tasksOperations';
import tasksSelectors from '../redux/tasks/tasksSelectors';

class TaskerView extends Component {
  componentDidMount() {
    this.props.onFetchTasks();
  }

  render() {
    return (
      <>
        <TaskEditor />
        {/* {this.props.isLoadingTasks && <h1>Doing HTTP stuff...</h1>} */}
        <Filter />
        <TaskList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingTasks: tasksSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchTasks: tasksOperations.fetchTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskerView);
