import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/bookSlice';
import '../styles/BookItem.css';

const BookItem = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Could not fetch data.</p>;
  }

  if (!books) {
    return null;
  }

  const style = {
    visibility: 'hidden',
    height: 0,
    width: 0,
  };

  const renderBook = (itemId, book) => {
    const {
      category, title, author,
    } = book[0];

    return (
      <div key={itemId} className="book-info">
        <div className="Book-content">
          <div>
            <p className="category">{category}</p>
            <h3 className="title">{title}</h3>
            <p className="author">{author}</p>
          </div>
          <div className="buttons">
            <button type="button" className="btns">Comment</button>
            <button
              className="btns btn-remove"
              type="button"
              onClick={() => dispatch(removeBook(itemId))}
            >
              Remove
            </button>
            <button type="button" className="btns">Edit</button>
          </div>
        </div>
        <div className="chapter-status">
          <div className="status">
            <div className="progress-bar">
              <progress value="75" min="0" max="100" style={style}>75%</progress>
            </div>
            <div className="progress">
              <p className="percentage">75%</p>
              <p className="completed">Completed</p>
            </div>
          </div>
          <div className="chapter">
            <h3>CURRENT CHAPTER</h3>
            <p>Chapter 17</p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {Object.entries(books).map(([itemId, book]) => renderBook(itemId, book))}
    </div>
  );
};

export default BookItem;
