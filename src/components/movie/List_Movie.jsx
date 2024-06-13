import React from 'react';
import Item_Movie from './Item_Movie';
import './Movie.css'; // Import CSS file with updated styles

const List_Movie = ({ List_Movie, handleMovieClick }) => {
  return (
    <div className='movie_list_container'>
      <h1 className='movie_list_heading'>New Release</h1>
      <div className='movie_list'>
        {List_Movie.map((item, index) => (
          <div className='movie_item_container' key={item.id} onClick={() => handleMovieClick(index)}>
            <img className='movie_item_container_img' src={item.image} alt={item.movieName} />
            <div className='movie_item_layer'></div>
            <div className='movie_item_info'>
              <p className='movie_item_info_episode'>Episode {item.episode}</p>
              <p className='movie_item_info_name'>{item.movieName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List_Movie;
