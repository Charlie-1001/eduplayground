import styles from './FooterStyles.module.css';
import pageLogo from '../assets/images/page-logo-transparentBg.png';

function Footer() {
  return(
    <footer id='footer' className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src={pageLogo} alt="EduPlayground logo" />
      </div>
      <div className={styles.footerInfo}>
        <h3>©{new Date().getFullYear()} EduPlayground. All rights reserved.</h3>
        <p>Developed by: Charlie Sparks</p>
        <h3 className={styles.contactTitle}>Contact</h3>
        <p>Email: <a href='https://mail.google.com/mail/?view=cm&fs=1&to=piscesmai1001@gmail.com&su=EduPlayground Inquiry'>
          piscesmai1001@gmail.com
        </a></p>
      </div>
    </footer>
  )
}

export default Footer;
