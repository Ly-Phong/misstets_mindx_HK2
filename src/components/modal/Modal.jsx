import React from "react";
import "./Modal.css";


const Modal = ({ id, movieName, description, image, episode, closeModal }) => {
  return (
    <div className="modal_container">
      <div className="modal_content">
        <img src={image} alt={movieName} />
        <div className="Modal_item_info">
        <p className="modal_card_id">{id}</p>
        <p className="modal_movie_name">{movieName}</p>
        <p className="modal_description">{description}</p>
        <p className="modal_episode">Episode {episode}</p>
        </div>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
