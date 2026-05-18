import styles from './GalleryPageStyles.module.css';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';
import { galleryData } from '../data/galleryData';

function GalleryItems() {
  return(
    <div className={styles.galleryItems}>
      {
        galleryData.map(item => (
          <Link to={`/selectionPage/${item.id}`} key={item.id}>
            <Cards
              id={item.id}
              name={item.name}
              imageSrc={item.coverImg}
            />
          </Link>
        ))
      }
    </div>
  )
}

function Gallery() {
  return(
    <section className={styles.gallery}>
      <h1>Pick a category</h1>
      <GalleryItems />
    </section>
  )
}

export default Gallery;
