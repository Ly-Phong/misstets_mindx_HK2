import React from 'react';

const Item_Movie = ({ image, episode, movieName, handleMovieClick, index }) => {
  return (
    <div className='item_movie_container' onClick={() => handleMovieClick(index)}>
      <img className='item_movie_container_img' src={image} alt={movieName} />
      <div className='item_movie_info'>
        <p className='item_movie_episode'>Episode {episode}</p>
        <p className='item_movie_name'>{movieName}</p>
      </div>
    </div>
  );
};

export default Item_Movie;
