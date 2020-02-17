const baseURL = 'http://api.tvmaze.com';

const fetchShowDetails = showId => {
  return fetch(`${baseURL}/shows/${showId}`).then(res => res.json());
};

const fetchShowWithQuery = searchQuery => {
  return fetch(`${baseURL}/search/shows?q=${searchQuery}`)
    .then(res => res.json())
    .then(entries => entries.map(entry => entry.show));
};

export default { fetchShowDetails, fetchShowWithQuery };
