import PhotoShowcase from "../components/PhotoShowcase";
import { useVanPhotos } from "../hooks/useVanPhotos";

function CelebrationsAlbum() {
  const { photos } = useVanPhotos("celebrations");
  return (
    <>
      <PhotoShowcase photos={photos} title="Celebrations" />
    </>
  );
}

export default CelebrationsAlbum;
