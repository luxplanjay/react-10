import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    console.log('addEventListener');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    console.log('removeEventListener');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    console.log(e);
    if (e.code === 'Escape') {
      console.log('Закрываем модалку с this.props.onClose.');
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    console.log('event.target: ', event.target);
    console.log('event.currentTarget: ', event.currentTarget);

    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="Backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}
