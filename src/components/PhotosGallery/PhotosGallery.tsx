import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import type { Photo } from "../../types/photo";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

interface PhotosGalleryProps {
  photos: Photo[];
  onOpenModal: (photo: Photo) => void;
}

export default function PhotosGallery({
  photos,
  onOpenModal,
}: PhotosGalleryProps) {
  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <Grid>
      {photos.map((photo) => (
        <GridItem key={photo.id}>
          <PhotosGalleryItem
            src={photo.src.large}
            alt={photo.alt}
            avgColor={photo.avg_color}
            onClick={() => onOpenModal(photo)}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
