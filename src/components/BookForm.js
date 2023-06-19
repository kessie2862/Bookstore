import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ handleAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      handleAddBook(title.trim(), author.trim());
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Add a new book...</h3>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </div>
    </form>
  );
};

BookForm.propTypes = {
  handleAddBook: PropTypes.func.isRequired,
};

export default BookForm;
