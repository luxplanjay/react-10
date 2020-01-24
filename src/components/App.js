import React, { Component } from 'react';
import Layout from './Layout';
// import Counter from './Counter';
import TaskList from './TaskList';
import TaskEditor from './TaskEditor';
import createTask from '../utils/create-task';
import Counter from './Counter';

export default class App extends Component {
  state = {
    tasks: [],
  };

  addTask = () => {
    const task = createTask();

    this.setState(prevState => {
      return {
        tasks: [...prevState.tasks, task],
      };
    });
  };

  removeTask = taskId => {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter(({ id }) => id !== taskId),
      };
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <Layout>
        <Counter />
        <TaskEditor onAddTask={this.addTask} />
        {tasks.length > 0 && (
          <TaskList tasks={tasks} onRemoveTask={this.removeTask} />
        )}
      </Layout>
    );
  }
}
