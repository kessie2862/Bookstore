import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/bookSlice';
import BookList from './BookList';
import BookForm from './BookForm';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleAddBook = (title, author) => {
    const newBook = {
      item_id: `item${books.length + 1}`,
      title,
      author,
      category: 'Uncategorized',
    };
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <>
      <BookList books={books} handleRemoveBook={handleRemoveBook} />
      <BookForm handleAddBook={handleAddBook} />
    </>
  );
};

export default Books;
