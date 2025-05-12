import React, { useEffect, useState } from "react";
import { fetchImages } from "./api/unsplash.ts";
import { ImageData } from "./types/Image";
import ImageCard from "./components/ImageCard/ImageCard";
import s from "./App.module.css";

// const [images, setImages] = useState<Image[]>([]);
// const [query, setQuery] = useState<string>("");
// const [page, setPage] = useState<number>(1);
// const [isLoading, setIsLoading] = useState<boolean>(false);
// const [error, setError] = useState<string | null>(null);

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("nature");
  const [images, setImages] = useState<ImageData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [modalImage, setModalImage] = useState<ImageData | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
      } catch (error) {
        console.error("Error fetching images", error);
      }
    };
    loadImages();
  }, [query, page]);

  const handleModal = (image: ImageData) => {
    setModalImage(image);
  };

  return (
    <div>
      <ul className={s.gallery}>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} handleModal={handleModal} />
        ))}
      </ul>
    </div>
  );
};

export default App;
