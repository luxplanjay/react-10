import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Comments from '../components/Comments';
import './CommentsView.css';
// import fadeStyles from './fade.module.css';

export default class CommentsView extends Component {
  state = {
    showComments: false,
  };

  toggleComments = () => {
    this.setState(state => ({ showComments: !state.showComments }));
  };

  render() {
    const { showComments } = this.state;

    return (
      <>
        <button type="button" onClick={this.toggleComments}>
          {showComments ? 'Hide' : 'Show'} comments
        </button>

        <CSSTransition
          in={showComments}
          classNames="fade"
          timeout={250}
          unmountOnExit
        >
          <Comments />
        </CSSTransition>
      </>
    );
  }
}
