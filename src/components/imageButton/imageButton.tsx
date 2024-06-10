import styles from './imageButton.module.css'

interface ImageButtonProps {
    /** Image Source */
    src : string
    alt : string
    link : string    
}

function ImageButton({src, alt, link}: ImageButtonProps) {   
  return (
    <a href={link} target="_blank" className={styles.imageButton}>
        <img src={src} alt={alt}></img>
    </a>
  );
}
  
export default ImageButton;