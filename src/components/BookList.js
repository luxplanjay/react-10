import React from 'react';
import PropTypes from 'prop-types';

function BookList({ books }) {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>{book.name}</li>
      ))}
    </ul>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
