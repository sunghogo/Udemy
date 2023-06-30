import { GoChecklist } from "react-icons/go";
import { useFetchAlbumsQuery } from "../store";

function AlbumsList({ user }) {
  // data = reponse data, error = null/Error object, isLoading = boolean
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  console.log(data, error, isLoading);

  return <div>Albums for {user.name}</div>;
}

export default AlbumsList;
