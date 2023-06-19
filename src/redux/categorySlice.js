import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    checkStatus: (state) => state,
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
