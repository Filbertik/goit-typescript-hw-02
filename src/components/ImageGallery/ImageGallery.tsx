// Edit and typefix
import React from "react";
import { ImageData } from "../../types/Image";
// Edit and typefix

// import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

// const ImageGallery = ({ data, handleModal }) => {
//   return (
//     <ul className={s.gallery}>
//       {data.map((image) => (
//         <li className={s.card} key={image.id}>
//           <ImageCard image={image} handleModal={handleModal} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// Edit and typefix
interface ImageGalleryProps {
  images: ImageData[];
  handleModal: (image: ImageData) => void;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ images, handleModal }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} handleModal={handleModal} />
      ))}
    </ul>
  );
};
// Edit and typefix

export default ImageGallery;
