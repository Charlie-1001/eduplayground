import styles from './SelectionPageStyles.module.css';
import Cards from '../components/Cards';
import { useParams } from 'react-router-dom';
import { galleryData } from '../data/galleryData';

function SelectionPage() {
  const {id} = useParams();
  const selectedItem = galleryData.find(item => item.id === id);

  if (!selectedItem) { return <h1>Item not found!</h1>};

  return(
    <section className={styles.selectionPage}>
      {/* The side section introducing the subject */}
      <aside className={styles.sideContent}>
        <img src={selectedItem.coverImg} alt={selectedItem.name} />
        <h2>{selectedItem.name}</h2>
        <p>{selectedItem.description}</p>
      </aside>
      {/* The games for the selected subject */}
      <div className={styles.activityContainer}>
        <h2>Choose your game</h2>
        <div className={styles.activities}>
          {
            selectedItem.games.map(game => (
              <a href={game.link} target='_blank' rel='noopener noreferer'>
                <Cards
                  id={game.id}
                  name={game.name}
                  imageSrc={game.image}
                />
              </a>

            ))
          }
        </div>
      </div>
    </section>
  )
}

export default SelectionPage;
