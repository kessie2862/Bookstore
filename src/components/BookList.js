import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ books, handleRemoveBook }) => (
  <div>
    {books.length === 0 ? (
      <p>No books available</p>
    ) : (
      books.map((book) => (
        <BookItem
          key={book.item_id}
          book={book}
          handleRemoveBook={handleRemoveBook}
        />
      ))
    )}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default BookList;
