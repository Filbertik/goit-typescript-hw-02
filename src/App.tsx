import React, { useEffect, useState } from "react";
import { fetchImages } from "./api/unsplash";
import { ImageData } from "./types/Image";
import ImageCard from "./components/ImageCard/ImageCard";
import Searchbar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import s from "./App.module.css";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("nature");
  const [images, setImages] = useState<ImageData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [modalImage, setModalImage] = useState<ImageData | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchImages(query, page);
        if (page === 1) {
          setImages(data.results);
        } else {
          setImages((prev) => [...prev, ...data.results]);
        }
      } catch (error) {
        console.error("Error fetching images", error);
      }
    };
    loadImages();
  }, [query, page]);

  const handleQuery = (newQuery: string, perPage: number) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleModal = (image: ImageData) => {
    setModalImage(image);
  };

  return (
    <div>
      <Searchbar handleQuery={handleQuery} />
      <ul className={s.gallery}>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} handleModal={handleModal} />
        ))}
      </ul>
      {images.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}

      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onClose={() => setModalImage(null)}
          selectedImage={modalImage}
        />
      )}
    </div>
  );
};

export default App;
