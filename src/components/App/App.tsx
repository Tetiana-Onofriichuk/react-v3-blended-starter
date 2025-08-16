import { useState } from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import { getPhotos } from "../../services/photos";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import type { Photo } from "../../types/photo";
import Modal from "../Modal/Modal";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handleSubmit = async (newQuery: string) => {
    try {
      const results = await getPhotos(newQuery);

      if (results.length === 0) {
        alert("No photos found for your request.");
        return;
      }

      setPhotos(results);
    } catch (error) {
      console.error("error", error);
    }
  };
  const handleOpenModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <Section>
      <Container>
        <Form onSubmit={handleSubmit} />
        <PhotosGallery photos={photos} onOpenModal={handleOpenModal} />
        {selectedPhoto && (
          <Modal onClose={handleCloseModal}>
            <img src={selectedPhoto.src.large} alt={selectedPhoto.alt} />
          </Modal>
        )}
      </Container>
    </Section>
  );
}
