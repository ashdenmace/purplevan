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
        <h1 className="fade-in">Photos</h1>
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
