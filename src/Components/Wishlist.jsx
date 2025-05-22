// src/components/Wishlist.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist, clearWishlist } from '../store/wishlistSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <div>
      <h2>Movies Wishlist</h2>
      {wishlistItems.length > 0 ? (
        <>
          {wishlistItems.map((movie) => (
            <div key={movie.id}>
              <span>{movie.title}</span>
              <button onClick={() => dispatch(removeFromWishlist(movie.id))}>X</button>
            </div>
          ))}
          <button onClick={() => dispatch(clearWishlist())}>Clear Wishlist</button>
        </>
      ) : (
        <p>Wishlist is empty</p>
      )}
    </div>
  );
};

export default Wishlist;