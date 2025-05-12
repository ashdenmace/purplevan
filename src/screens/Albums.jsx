import React from "react";
import { Link } from "react-router-dom";
import "../styles/Albums.css";

function Albums() {
  const albums = [
    {
      title: "Current",
      image:
        "https://purplevan-photos.s3.us-east-1.amazonaws.com/hazevan-photos%2F20191008_121804.jpg",
      link: "/current",
    },
    {
      title: "Before / Auto Work",
      image:
        "https://purplevan-photos.s3.us-east-1.amazonaws.com/hazevan-photos%2F20190711_125813.jpg",
      link: "/auto-work",
    },
    {
      title: "Celebrations",
      image:
        "https://purplevan-photos.s3.us-east-1.amazonaws.com/hazevan-photos%2FFB_IMG_1607841040721.jpg",
      link: "/celebrations",
    },
    {
      title: "All Photos",
      image:
        "https://purplevan-photos.s3.us-east-1.amazonaws.com/hazevan-photos%2FFB_IMG_1720133851098.jpg",
      link: "/photos",
    },
  ];

  return (
    <div className="albums-section">
      <div className="albums-page-title">
        <h2>Please choose a photo album to view</h2>
        <p>
          You can look at all the photos of Haze in its final form, during the
          auto work, or see all the photos at once.
        </p>
      </div>
      <div className="albums-flex-container">
        {albums.map((album, index) => (
          <div className="album-box" key={index}>
            <Link style={{ textDecoration: "none" }} to={album.link}>
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
