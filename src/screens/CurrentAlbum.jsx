import PhotoShowcase from "../components/PhotoShowcase";
import { useVanPhotos } from "../hooks/useVanPhotos";

function CurrentAlbum() {
  const { photos } = useVanPhotos("current");

  return (
    <>
      <PhotoShowcase photos={photos} title="Present Day Haze" />
    </>
  );
}

export default CurrentAlbum;
