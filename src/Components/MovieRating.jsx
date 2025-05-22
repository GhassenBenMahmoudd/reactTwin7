// src/components/MovieRating.jsx
import React, { useState } from 'react';

const MovieRating = ({ movieId }) => {
  const [rating, setRating] = useState('');
  const [ratings, setRatings] = useState([]);

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    const ratingValue = parseInt(rating);
    if (ratingValue < 1 || ratingValue > 5 || isNaN(ratingValue)) {
      alert('Please enter a rating between 1 and 5');
      return;
    }
    setRatings([...ratings, ratingValue]);
    setRating('');
  };

  const averageRating =
    ratings.length > 0
      ? (ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(1)
      : null;

  return (
    <div>
      <form onSubmit={handleRatingSubmit}>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Add your rating"
        />
        <button type="submit">Submit</button>
      </form>
      <p>
        {ratings.length > 0 ? `Average Rating: ${averageRating}` : 'No ratings yet'}
      </p>
    </div>
  );
};

export default MovieRating;