import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tvAPI from '../services/tv-api';

export default class Shows extends Component {
  state = {
    shows: [],
  };

  componentDidMount() {
    tvAPI.fetchShowWithQuery('cat').then(shows => this.setState({ shows }));
  }

  render() {
    const { shows } = this.state;
    const { match } = this.props;

    return (
      <>
        {shows.length > 0 && (
          <ul>
            {shows.map(show => (
              <li key={show.id}>
                <Link to={`${match.url}/${show.id}`}>{show.name}</Link>
              </li>
            ))}
          </ul>
        )}

        {/* <Route path={`${match.path}/:showId`} component={InlineShowDetails} /> */}
      </>
    );
  }
}
