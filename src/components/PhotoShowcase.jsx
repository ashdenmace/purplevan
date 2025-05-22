import { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import "../styles/PhotoShowcase.css";

function PhotoShowcase({ photos, title = "", subtitle = "" }) {
  const [index, setIndex] = useState();

  return (
    <>
      <div>
        <div className="photo-title">
          <h1 className="fade-in">{title}</h1>
          <h2 className="fade-in">{subtitle}</h2>
          <Link to="/albums">
            <button className="fade-in btn btn-primary">Albums</button>
          </Link>
        </div>
        <Lightbox
          index={index}
          open={index >= 0}
          slides={photos}
          close={() => setIndex(-1)}
        />

        <div className="photos-container">
          {photos.map((photo, index) => {
            return (
              <img
                className="fade-in photo"
                onClick={() => setIndex(index)}
                loading="lazy"
                key={photo.key}
                src={photo.src}
              ></img>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PhotoShowcase;
