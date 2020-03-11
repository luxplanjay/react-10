import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './App';
import tasksOperations from '../redux/tasks/tasksOperations';
import tasksSelectors from '../redux/tasks/tasksSelectors';
import counterSelectors from '../redux/counter/counterSelectors';
import counterActions from '../redux/counter/counterActions';

class AppContainer extends Component {
  componentDidMount() {
    this.props.onFetchTasks();
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isLoadingTasks: tasksSelectors.getLoading(state),
  counterValue: counterSelectors.getValue(state),
});

const mapDispatchToProps = {
  onFetchTasks: tasksOperations.fetchTasks,
  onIncrement: counterActions.increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
