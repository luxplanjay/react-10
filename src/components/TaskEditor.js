import React, { Component } from 'react';
import { connect } from 'react-redux';
import tasksOperations from '../redux/tasks/tasksOperations';
import './TaskEditor.css';

class TaskEditor extends Component {
  state = {
    text: '',
  };

  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddTask(this.state.text);

    this.setState({ text: '' });
  };

  render() {
    return (
      <form className="TaskEditor" onSubmit={this.handleSubmit}>
        <label className="TaskEditor-label">
          Text
          <input
            className="TaskEditor-input"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" className="TaskEditor-button">
          Добавить заметку
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddTask: tasksOperations.addTask,
};

export default connect(null, mapDispatchToProps)(TaskEditor);
