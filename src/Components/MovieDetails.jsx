// src/components/MovieDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moviesData from '../movies.json';
import MovieRating from './MovieRating';
import { addToWishlist } from '../store/wishlistSlice';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movie = moviesData.find((m) => m.id === parseInt(id));

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(movie));
  };

  const handleGoBack = () => {
    navigate('/movies');
  };

  if (!movie) {
    return (
      <div style={{
        padding: '20px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2>Movie Not Found</h2>
        <button
          onClick={handleGoBack}
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Back to Movies
        </button>
      </div>
    );
  }

  // Container style
  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  // Header style
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
  };

  // Image container style
  const imageContainerStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: '#e9ecef',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20px',
    borderRadius: '8px',
    overflow: 'hidden'
  };

  // Content style
  const contentStyle = {
    flex: '1'
  };

  // Title style
  const titleStyle = {
    margin: '0 0 10px 0',
    fontSize: '24px',
    fontWeight: 'bold'
  };

  // Info style
  const infoStyle = {
    margin: '10px 0',
    fontSize: '16px'
  };

  // Button style
  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={imageContainerStyle}>
          {movie.img ? (
            <img src={movie.img} alt={movie.title} style={{ maxWidth: '100%', maxHeight: '100%' }} />
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
        <div style={contentStyle}>
          <h2 style={titleStyle}>{movie.title}</h2>
          <p style={infoStyle}><strong>Year:</strong> {movie.year}</p>
          <p style={infoStyle}><strong>Genre:</strong> {movie.genre}</p>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Description</h3>
        <p style={{ lineHeight: '1.6' }}>{movie.description}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Rating</h3>
        <MovieRating movieId={movie.id} />
      </div>

      <div style={{ display: 'flex', marginTop: '20px' }}>
        <button style={buttonStyle} onClick={handleGoBack}>
          Back to Movies
        </button>
        <button style={buttonStyle} onClick={handleAddToWishlist}>
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;