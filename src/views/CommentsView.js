import React, { Component, lazy, Suspense } from 'react';
import { CSSTransition } from 'react-transition-group';
// import Comments from '../components/Comments';
import './CommentsView.css';

const AsyncComments = lazy(() =>
  import('../components/Comments' /* webpackChunkName: "comments-section" */),
);

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

        <Suspense fallback={<h1>Loading comments...</h1>}>
          <CSSTransition
            in={showComments}
            classNames="fade"
            timeout={250}
            unmountOnExit
          >
            <AsyncComments />
          </CSSTransition>
        </Suspense>
      </>
    );
  }
}
