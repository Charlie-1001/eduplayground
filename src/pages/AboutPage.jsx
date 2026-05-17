import styles from './AboutPageStyles.module.css';

function AboutPage() {
  return(
    <section className={styles.aboutPage}>
      <h1>About EduPlayground</h1>
      <div className={styles.textContainer}>
        <p>
          EduPlayground is a personal educational platform designed primarily as a collection of
          interactive teaching aids. In today’s digital age, education is increasingly supported
          and enhanced by digital tools rather than relying solely on traditional textbooks.
          This platform reflects that shift by offering flexible, interactive learning experiences.
        </p>
        <p>
          The games and activities on EduPlayground are initially developed based on my own teaching
          needs and specific subject requirements. When a particular topic or classroom activity
          requires more engagement, I create custom interactive games to support and improve the
          learning process. In this way, EduPlayground functions as a practical “toolbox” for teaching.
        </p>
        <p>
          Over time, the platform will continue to expand beyond my own subject areas. Additional
          educational games will be introduced to support a wider range of learning topics, allowing
          students to learn and play in a more engaging and enjoyable environment.
        </p>
        <p>
          All resources on this website are completely free to use for educational purposes.
          I sincerely welcome feedback, suggestions, or ideas from anyone who visits the platform,
          as continuous improvement is an important part of its development.
        </p>
        <p>
          If you would like to get in touch, please use the contact details provided below.
        </p>
        <p>
          Thank you for visiting EduPlayground!
        </p>
      </div>
    </section>
  )
}

export default AboutPage;
