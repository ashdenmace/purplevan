import React from "react";
import { Link } from "react-router-dom";
import "../styles/Albums.css";

function Albums() {
  const albums = [
    {
      title: "Celebrations",
      image:
      "https://purplevan-photos.s3.us-east-1.amazonaws.com/celebrations%2F20230704_083846.jpg",
      link: "/celebrations",
    },
    {
      title: "Current",
      image:
      "https://purplevan-photos.s3.us-east-1.amazonaws.com/current%2F20191008_121804.jpg",
      link: "/current",
    },
    {
      title: "Before / Auto Work",
      image:
      "https://purplevan-photos.s3.us-east-1.amazonaws.com/before%2F20190711_125813.jpg",
      link: "/auto-work",
    },
  ];

  return (
    <div className="albums-section">
      <div className="albums-page-title">
        <h2>Please choose an album to view</h2>
        <p>
          Choose between current photos of haze, haze during the auto work, or a fun album of celebrations haze has been apart of
        </p>
      </div>
      <div className="albums-flex-container">
        {albums.map((album, index) => (
          <div className="album-box" key={index}>
            <Link style={{ textDecoration: "none", color: "inherit"}} to={album.link}>
              <img src={album.image} alt={album.title} />
              <div className="album-label">{album.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Albums;
