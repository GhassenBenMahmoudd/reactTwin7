// src/store/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
    message: '',
  },
  reducers: {
    addToWishlist: (state, action) => {
      const movie = action.payload;
      if (state.items.some((item) => item.id === movie.id)) {
        state.message = 'Movie already exists';
      } else {
        state.items.push(movie);
        state.message = 'Added to wishlist';
        setTimeout(() => {
          state.message = '';
        }, 2000);
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;