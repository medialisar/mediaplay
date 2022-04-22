import React from 'react';

const SongCard = ({images, title = '', artist}) => {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={images} alt="song image" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{artist} | Durasi</p>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">
            Select
          </a>
          <a href="#" className="card-footer-item">
            Detail
          </a>
        </footer>
      </div>
    </>
  );
};

export default SongCard;
