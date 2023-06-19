import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import bookReducer from './bookSlice';

const initialState = {
  books: [],
  categories: 'Under construction',
};

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
  preloadedState: initialState,
});

export default store;
