import styles from './CardStyles.module.css';

function Cards({id, name, imageSrc}) {
  return(
    <div className={styles.card} id={id} key={id}>
      <img src={imageSrc} loading='lazy' alt={name} />
      <h3>{name}</h3>
    </div>
  )
}

export default Cards;
