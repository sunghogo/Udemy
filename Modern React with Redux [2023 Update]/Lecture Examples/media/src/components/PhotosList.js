import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";

function PhotosList({ album }) {
  useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  return (
    <div>
      <div className="flex flex-row m-2 items-center justify-between">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
    </div>
  );
}

export default PhotosList;
