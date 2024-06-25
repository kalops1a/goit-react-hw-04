
import styles from './ImageModal.module.css';

const ImageModal = ({ image, onClose }) => {
  return (
    <div className={styles.imageModal} onClick={onClose}>
      <div className={styles.imageModalContent} onClick={e => e.stopPropagation()}>
        <img src={image.urls.regular} alt={image.description} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;