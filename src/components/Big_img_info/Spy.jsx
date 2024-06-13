// Spy.jsx
import React from "react";
import "./Spy.css";
import { SpyInformation } from "./SpyData"; // Import SpyInformation from spyData

const Spy = () => {
  return (
    <div className="spy_container">
      {SpyInformation.map((item, index) => (
        <div key={index} className="spy_image_container">
          <img className="spy_image" src={item.image} alt={item.movieName} />
          <div className="spy_info">
            <h2 className="spy_movie_name">{item.movieName}</h2>
            <p className="spy_episode">Episode: {item.episode}</p>
            <p className="spy_description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Spy;
