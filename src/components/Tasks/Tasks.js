import React, { Component } from 'react';
import { uuid } from 'uuidv4';
import TaskList from './TaskList';
import TaskEditor from './TaskEditor';
import Filter from './Filter';

export default class Tasks extends Component {
  state = {
    tasks: [],
    filter: '',
  };

  componentDidMount() {
    console.log('Tasks componentDidMount');

    const persistedTasks = localStorage.getItem('tasks');

    if (persistedTasks) {
      this.setState({
        tasks: JSON.parse(persistedTasks),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Tasks componentDidUpdate');
    // console.log('prevState: ', prevState);
    // console.log('this.state: ', this.state);

    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

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
      <>
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
      </>
    );
  }
}
