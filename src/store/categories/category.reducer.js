import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoriesAndDocuments } from 'UTILS/firebase/firebase.utils';

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const getCategoryItems = createAsyncThunk(
  'categories/getCategoryItems',
  async (data, { rejectWithValue }) => {
    console.log('aaa', data);
    try {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      console.log('categoriesArray', categoriesArray);
      return categoriesArray;
    } catch (error) {
      console.log('error: ', error);
      return rejectWithValue(error);
    }
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
  extraReducers: {
    [getCategoryItems.pending]: state => {
      state.isLoading = true;
    },
    [getCategoryItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    [getCategoryItems.rejected]: (state, action) => {
      console.log('action: ', action);
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
