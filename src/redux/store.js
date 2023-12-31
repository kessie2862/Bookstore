import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import bookReducer from './bookSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

export default store;
