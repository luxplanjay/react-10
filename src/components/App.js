import React, { Component } from 'react';
import Spinner from './Spinner';
import Notification from './Notification';
import ArticleList from './ArticleList';
import SearchForm from './SearchForm';
import articlesApi from '../services/articlesApi';

export default class App extends Component {
  state = {
    articles: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: 0,
    largeImageUrl: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    articlesApi
      .fetchArticlesWithQuery(searchQuery, page)
      .then(articles =>
        this.setState(prevState => ({
          articles: [...prevState.articles, ...articles],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 0,
      articles: [],
    });
  };

  render() {
    const { articles, loading, error } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.handleSearchFormSubmit} />

        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}

        {articles.length > 0 && <ArticleList articles={articles} />}
        {loading && <Spinner message="Loading..." />}

        {articles.length > 0 && !loading && (
          <button type="button" onClick={this.fetchArticles}>
            Load more
          </button>
        )}
      </>
    );
  }
}
