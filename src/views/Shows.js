import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getQueryParams from '../utils/get-query-params';
import Searchbox from '../components/Searchbox';
import tvAPI from '../services/tv-api';

export default class Shows extends Component {
  state = {
    shows: [],
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      console.log('Есть квери, можно фечить');
      this.fetchShows(query);

      // return;
    }

    // this.fetchShows('batman')
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchShows(nextQuery);
    }
  }

  fetchShows = query => {
    tvAPI.fetchShowWithQuery(query).then(shows => this.setState({ shows }));
  };

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { shows } = this.state;
    const { match } = this.props;

    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />

        {shows.length > 0 && (
          <ul>
            {shows.map(show => (
              <li key={show.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${show.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {show.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
