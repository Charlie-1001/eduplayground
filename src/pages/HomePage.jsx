import styles from './HomePageStyles.module.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return(
    <section className={styles.banner}>
      <h1>Welcome to EduPlayground!</h1>
      <h2>"Where Learning Becomes a Game"</h2>
      <Link to="/galleryPage" className={styles.ctaBtn}>Let's Enter!</Link>
    </section>
  )
}

export default HomePage;
