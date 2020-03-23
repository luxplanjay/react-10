import React, { Component } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './CardsView.css';

const users = [
  { name: 'Mango', hobby: 'HTML' },
  { name: 'Poly', hobby: 'CSS' },
  { name: 'Kiwi', hobby: 'JS' },
];

export default class CardsView extends Component {
  state = {
    activeIdx: 0,
    items: users,
  };

  getActiveUser = () => this.state.items[this.state.activeIdx];

  showNext = () => {
    this.setState(state => ({ activeIdx: state.activeIdx + 1 }));
  };

  showPrev = () => {
    this.setState(state => ({ activeIdx: state.activeIdx - 1 }));
  };

  render() {
    const { name, hobby } = this.getActiveUser();
    const isOnFirstSlide = this.state.activeIdx === 0;
    const isOnLastSlide = this.state.activeIdx === this.state.items.length - 1;

    return (
      <>
        <button onClick={this.showPrev} disabled={isOnFirstSlide}>
          Prev
        </button>
        <button onClick={this.showNext} disabled={isOnLastSlide}>
          Next
        </button>
        <hr />

        <div className="Card-container">
          <SwitchTransition>
            <CSSTransition key={name} timeout={500} classNames="Card">
              <div className="Card-body">
                <h1>{name}</h1>
                <p>Hobby: {hobby}</p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </>
    );
  }
}
