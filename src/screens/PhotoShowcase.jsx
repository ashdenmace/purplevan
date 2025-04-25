import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import useVanPhotos from "../hooks/useVanPhotos";
import "../styles/photoshowcase.css";

function PhotoShowcase() {
  const { photos, error, isLoading } = useVanPhotos();
  const [index, setIndex] = useState();

  return (
    <>
      <div>
        <div className="photo-title">
          <h1 className="fade-in">Photos</h1>
          <h2 className="fade-in">Including Haze being worked on</h2>
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
