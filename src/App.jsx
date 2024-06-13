import { useState } from "react";
import "./App.css";
import Header from "./components/header/Logo"; 
import Explore from "./components/explore/Explore";
import List_Movie from "./components/movie/List_Movie";
import Modal from "./components/modal/Modal";
import { movieList } from "./components/movie/Data_Movie";
import Spy from "./components/Big_img_info/Spy";

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies] = useState(movieList.data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMovieClick = (index) => {
    setSelectedMovie(movies[index]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app_container">
      <Header />

      <Explore selectedMovie={selectedMovie} />
      
      <Spy/>

      <List_Movie List_Movie={movies} handleMovieClick={handleMovieClick} />
      
      {isModalOpen && selectedMovie && (
        <Modal
          id={selectedMovie.id}
          movieName={selectedMovie.movieName}
          description={selectedMovie.description}
          image={selectedMovie.image}
          episode={selectedMovie.episode}
          closeModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;