import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  margin: 0;
  outline: 1px solid red;
`;

const ListItem = styled.li`
  background-color: teal;
  color: #fff;
  margin-bottom: 8px;

  &:hover {
    background-color: palevioletred;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

function BookList({ books }) {
  return (
    <List>
      {books.map(book => (
        <ListItem key={book.id}>{book.name}</ListItem>
      ))}
    </List>
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
