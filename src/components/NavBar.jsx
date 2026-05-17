import styles from './NavBarStyles.module.css';
import logo from '../assets/images/page-logo-transparentBg.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return(
    <nav className={styles.navBar}>
      <div className={styles.logoPart}>
        <img src= {logo} alt='EduPlayground logo' />
        <h1>EduPlayground</h1>
      </div>
      <ul className={styles.navBtnPart}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutPage">About</Link></li>
        <li><a href='#footer'>Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;
