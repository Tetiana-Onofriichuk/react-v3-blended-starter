import styles from "./PhotosGalleryItem.module.css";

interface PhotosGalleryItemProps {
  src: string;
  alt: string;
  avgColor: string;
  onClick: () => void;
}

export default function PhotosGalleryItem({
  src,
  alt,
  avgColor,
  onClick,
}: PhotosGalleryItemProps) {
  return (
    <div
      className={styles.thumb}
      style={{
        backgroundColor: avgColor,
        borderColor: avgColor,
      }}
      onClick={onClick}
    >
      <img src={src} alt={alt} />
    </div>
  );
}
