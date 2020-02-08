import React, { Component, createRef } from 'react';

export default class Player extends Component {
  playerRef = createRef();

  play = () => {
    console.dir(this.playerRef.current);
    this.playerRef.current.play();
  };

  pause = () => {
    this.playerRef.current.pause();
  };

  render() {
    const { source } = this.props;

    return (
      <div>
        <video src={source} ref={this.playerRef}>
          <track default kind="captions" srcLang="en" src="" />
          Sorry, your browser does not support embedded videos.
        </video>

        <div>
          <button type="button" onClick={this.play}>
            Play
          </button>
          <button type="button" onClick={this.pause}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}
