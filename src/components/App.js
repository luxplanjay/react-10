import React, { Component } from 'react';
import { uuid } from 'uuidv4';
import Layout from './Layout';
import TaskList from './TaskList';
import TaskEditor from './TaskEditor';
import Filter from './Filter';

export default class App extends Component {
  state = {
    tasks: [],
    filter: '',
  };

  addTask = text => {
    const task = {
      id: uuid(),
      text,
      completed: false,
    };

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

  // updateCompleted = taskId => {
  //   this.setState(prevState => {
  //     return {
  //       tasks: prevState.tasks.map(task => {
  //         if (task.id === taskId) {
  //           return {
  //             ...task,
  //             completed: !task.completed,
  //           };
  //         }

  //         return task;
  //       }),
  //     };
  //   });
  // };

  updateCompleted = taskId => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    }));
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleTasks = () => {
    const { tasks, filter } = this.state;

    return tasks.filter(task =>
      task.text.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;

    const visibleTasks = this.getVisibleTasks();

    return (
      <Layout>
        <TaskEditor onAddTask={this.addTask} />
        {visibleTasks.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        {visibleTasks.length > 0 && (
          <TaskList
            tasks={visibleTasks}
            onRemoveTask={this.removeTask}
            onUpdateTask={this.updateCompleted}
          />
        )}
      </Layout>
    );
  }
}
