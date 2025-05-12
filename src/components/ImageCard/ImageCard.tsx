// import s from "./ImageCard.module.css"
// const ImageCard = ({ image, handleModal }) => {

//     return <div>
//         <img className={s.img} src={image.urls.small} alt={image.alt_description} onClick={() => handleModal(image)} />
//     </div>
// }
// export default ImageCard;

import React from "react";
// import s from "./ImageCard.module.css";
import s from "./ImageCard.module.css";
import { ImageData } from "../../types/Image";

interface ImageCardProps {
  image: ImageData;
  handleModal: (image: ImageData) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, handleModal }) => {
  return (
    <div>
      <img
        className={s.img}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => handleModal(image)}
      />
    </div>
  );
};

export default ImageCard;
