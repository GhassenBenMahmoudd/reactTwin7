// src/components/Movies.jsx
import React, { useState } from 'react';
import Movie from './Movie';
import SearchBar from './SearchBar';
import moviesData from '../movies.json';
import { Container, Row, Col, Alert } from 'react-bootstrap';

const Movies = () => {
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredMovies(moviesData);
    } else {
      const results = moviesData.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(results);
    }
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />

      {filteredMovies.length === 0 ? (
        <Alert variant="info" className="text-center">
          No movies found matching your search.
        </Alert>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredMovies.map((movie) => (
            <Col key={movie.id}>
              <Movie movie={movie} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Movies;