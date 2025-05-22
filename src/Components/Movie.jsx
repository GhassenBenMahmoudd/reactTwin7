// src/components/Movie.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../store/wishlistSlice';
import MovieRating from './MovieRating';
import { Card, Button } from 'react-bootstrap';

const Movie = ({ movie }) => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.wishlist.message);

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(movie));
    if (message === 'Movie already exists') {
      alert('Movie already exists');
    }
  };

  return (
    <Card style={{ width: '18rem' }} className="h-100">
      <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: '180px' }}>
          {movie.img ? (
            <Card.Img variant="top" src={movie.img} alt={movie.title} style={{ maxHeight: '180px', objectFit: 'contain' }} />
          ) : (
            <div style={{ width: '80px', height: '80px', opacity: '0.5' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
          )}
        </div>
        <Card.Body className="text-center">
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text className="mb-1">
            <small>Year: {movie.year}</small>
          </Card.Text>
          <Card.Text className="mb-1">
            <small>Genre: {movie.genre}</small>
          </Card.Text>
          <Card.Text>
            <small>Description: {movie.description}</small>
          </Card.Text>
        </Card.Body>
      </Link>
      <Card.Footer className="bg-white border-top-0">
        <Button
          variant="primary"
          onClick={handleAddToWishlist}
          className="w-100 mb-2"
        >
          Add to Wishlist
        </Button>
        {message && <p className="text-danger small mt-1">{message}</p>}
        <MovieRating movieId={movie.id} />
      </Card.Footer>
    </Card>
  );
};

export default Movie;