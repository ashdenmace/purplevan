import PhotoShowcase from "../components/PhotoShowcase";
import useVanPhotos from "../hooks/useVanPhotos";

function BeforeAlbum() {
  const { photos } = useVanPhotos("before");

  return (
    <>
      <PhotoShowcase photos={photos} title="Auto work" />
    </>
  );
}

export default BeforeAlbum;
