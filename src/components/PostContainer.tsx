import React, { FC } from "react";
import { photosAPI } from "../store/api";
import PhotoItem from "./PhotoItem";

const PostContainer: FC = () => {
  const {
    data: photos,
    error,
    isLoading
  } = photosAPI.useFetchAllPhotosQuery(200);

  return (
    <div className="post_list">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error ...</h1>}
      {photos && photos.map((photo) => <PhotoItem photo={photo} />)}
    </div>
  );
};

export default PostContainer;
