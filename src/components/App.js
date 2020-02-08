import React, { Component } from 'react';
import Layout from './Layout';
import Modal from './Modal';
import Player from './Player';

export default class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <Layout>
        <Player source="http://techslides.com/demos/sample-videos/small.mp4" />

        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h2>Modal title</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              aliquam, similique asperiores voluptates eos expedita modi
              pariatur ipsa necessitatibus fuga harum! Animi, facilis reiciendis
              nesciunt alias quo unde tempora. Natus eum delectus porro placeat,
              praesentium, harum maiores sunt explicabo quidem, excepturi nam
              repellendus officiis distinctio minima enim magnam et accusamus.
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}
      </Layout>
    );
  }
}
