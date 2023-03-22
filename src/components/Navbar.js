import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className={styles.nav}>
            
            <div className={styles.leftDiv}>
            <Link to='/'>
                <img src='https://cdn-icons-png.flaticon.com/512/2504/2504903.png' className={styles.siteLogo}></img>
            </Link>
            </div>
            
            <div className={styles.rightNav}>
                <div className={styles.user}>
                    <a href='/'>
                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className={styles.userDp}></img>
                    </a>
                    <span>Avin</span>
                </div>

                <div className={styles.navLinks}>
                    <ul>
                        <li>
                            <Link to="/login">Log in</Link>
                        </li>
                        <li>
                            <a href='/'>Log out</a>
                        </li>
                        <li>
                            <a href='/'>Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;