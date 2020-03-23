import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Swiper.css';

const images = [
  'https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&w=960',
  'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&w=960',
  'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&w=960',
  'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&w=960',
  'https://images.pexels.com/photos/1521305/pexels-photo-1521305.jpeg?auto=compress&w=960',
];

export default class Swiper extends Component {
  state = {
    activeSlideIndex: 0,
    items: images,
  };

  getActiveImage = () => this.state.items[this.state.activeSlideIndex];

  showNext = () => {
    this.setState(state => ({ activeSlideIndex: state.activeSlideIndex + 1 }));
  };

  showPrev = () => {
    this.setState(state => ({ activeSlideIndex: state.activeSlideIndex - 1 }));
  };

  render() {
    const { activeSlideIndex, items } = this.state;
    const isOnFirstSlide = activeSlideIndex === 0;
    const isOnLastSlide = activeSlideIndex === items.length - 1;
    const image = this.getActiveImage();

    return (
      <>
        <div className="Swiper-controls">
          <button onClick={this.showPrev} disabled={isOnFirstSlide}>
            Prev
          </button>
          <button onClick={this.showNext} disabled={isOnLastSlide}>
            Next
          </button>
        </div>

        <TransitionGroup className="Swiper">
          <CSSTransition key={image} timeout={250} classNames="Swiper-img">
            <img src={image} alt="cat" />
          </CSSTransition>
        </TransitionGroup>
      </>
    );
  }
}
