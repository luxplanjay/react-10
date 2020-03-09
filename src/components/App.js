import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import TaskList from './TaskList';
import TaskEditor from './TaskEditor';
import Filter from './Filter';
import tasksOperations from '../redux/tasks/tasksOperations';

class App extends Component {
  componentDidMount() {
    this.props.onFetchTasks();
  }

  render() {
    return (
      <Layout>
        {this.props.isLoadingTasks && <h1>LOADING STUFF...</h1>}
        <TaskEditor />
        <Filter />
        <TaskList />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingTasks: state.tasks.loading,
});

const mapDispatchToProps = {
  onFetchTasks: tasksOperations.fetchTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
