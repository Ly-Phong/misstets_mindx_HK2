import React from 'react';
import './Explore.css';

const Explore = ({ selectedMovie }) => {
  return (
    <div className="explore_container">
      <h3>Explore</h3>
      {selectedMovie ? (
        <div>
          <h2>{selectedMovie.movieName}</h2>
          <p>Episode {selectedMovie.episode}</p>
        </div>
      ) : (
        <p>What are you gonna watch today?</p>
      )}
    </div>
  );
}

export default Explore;
