import React from "react";
import Modal from "react-modal";
import { FaRegHeart, FaWindowClose } from "react-icons/fa";
import s from "./ImageModal.module.css";
import { ImageData } from "../../types/Image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedImage: ImageData;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  selectedImage,
}) => {
  const { urls, alt_description, description, likes } = selectedImage;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={s.overlay}
      className={s.content}
      ariaHideApp={false}
      closeTimeoutMS={200}
      contentLabel={description || "Image"}
      bodyOpenClassName={s.reactModal}
    >
      <button onClick={onClose} className={s.btn}>
        <FaWindowClose className={s.icon} />
      </button>

      {likes > 0 && (
        <p className={s.likes}>
          <FaRegHeart className={s.iconLikes} />
          {likes}
        </p>
      )}

      <img
        src={urls?.regular}
        alt={alt_description || "Image"}
        className={s.img}
      />

      {description && <p className={s.description}>{description}</p>}
    </Modal>
  );
};

export default ImageModal;
