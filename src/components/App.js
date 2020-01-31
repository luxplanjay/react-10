import React, { Component } from 'react';
import Layout from './Layout';
// import Tasks from './Tasks/Tasks';
// import Modal from './Modal/Modal';
// import Clock from './Clock/Clock';
// import Tabs from './Tabs/Tabs';
// import tabs from '../tabs.json';

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
        {/* <Tasks /> */}
        {/* <div>
          <button type="button" onClick={this.toggleModal}>
            {showModal ? 'Hide' : 'Show'} Modal
          </button>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <h2>Modal title</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                aliquam, similique asperiores voluptates eos expedita modi
                pariatur ipsa necessitatibus fuga harum! Animi, facilis
                reiciendis nesciunt alias quo unde tempora. Natus eum delectus
                porro placeat, praesentium, harum maiores sunt explicabo quidem,
                excepturi nam repellendus officiis distinctio minima enim magnam
                et accusamus.
              </p>
              <button type="button" onClick={this.toggleModal}>
                Close modal
              </button>
            </Modal>
          )}
        </div> */}

        {/* <div>
          <button type="button" onClick={this.toggleModal}>
            {showModal ? 'Hide' : 'Show'} Clock
          </button>
          {showModal && <Clock />}
        </div> */}

        {/* <Tabs items={tabs} /> */}
      </Layout>
    );
  }
}
