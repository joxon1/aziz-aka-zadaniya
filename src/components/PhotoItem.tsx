import React, { FC } from "react";
import { IPhotos } from "../types/IPhotos";

interface PostItemProps {
  photo: IPhotos;
}
const PhotoItem: FC<PostItemProps> = ({ photo }) => {
  return (
    <div>
      {photo.id} . {photo.title}
      <button>Add</button>
    </div>
  );
};

export default PhotoItem;
