import styles from './FooterStyles.module.css';
import pageLogo from '../assets/images/page-logo-transparentBg.png';

function Footer() {
  return(
    <footer id='footer' className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src={pageLogo} alt="EduPlayground logo" />
      </div>
      <div className={styles.footerInfo}>
        {/* contact part */}
        <div>
          <h3>Contact</h3>
          <p>
            Email: <a href='https://mail.google.com/mail/?view=cm&fs=1&to=piscesmai1001@gmail.com&su=EduPlayground Inquiry'>
            piscesmai1001@gmail.com</a>
          </p>
          <p>
            Viber: <a href="viber://chat?number=%2B959421247184">Chat on Viber</a>
          </p>
        </div>

        {/* copyright part */}
        <div>
          <p >©{new Date().getFullYear()} EduPlayground. All rights reserved.</p>
          <p>Developed by: Charlie Sparks</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
