import React, { Component } from 'react';
import tvAPI from '../services/tv-api';
import routes from '../routes';

export default class ShowDetails extends Component {
  state = { show: null };

  componentDidMount() {
    tvAPI
      .fetchShowDetails(this.props.match.params.showId)
      .then(show => this.setState({ show }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    this.props.history.push(routes.shows);
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Назад к списку шоу
        </button>
        <br />

        {this.state.show && (
          <>
            <img
              src={this.state.show.image.medium}
              alt={this.state.show.name}
            />
            <h1>{this.state.show.name}</h1>
          </>
        )}
      </>
    );
  }
}
