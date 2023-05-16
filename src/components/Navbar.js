import { useAuth } from '../hooks';
import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const auth = useAuth();
    return(
        <div className={styles.nav}>
            
            <div className={styles.leftDiv}>
            <Link to='/'>
                <img src='https://cdn-icons-png.flaticon.com/512/2504/2504903.png' className={styles.siteLogo}></img>
            </Link>
            </div>
            
            <div className={styles.rightNav}>
                {auth.user && (
                <div className={styles.user}>
                    <Link to="/settings">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                        alt=""
                        className={styles.userDp}
                    />
                    </Link>
                    <span>{auth.user.name}</span>
                </div>
                )}

                <div className={styles.navLinks}>
                    <ul>
                        {auth.user ? (
                            <>
                            <li>
                                <button onClick={auth.logout}>Log out</button>
                            </li>
                            </>
                        ) : (
                            <>
                            <li>
                                <Link to="/login">Log in</Link>
                            </li>
                            <li>
                                <Link to='/register'>Register</Link>
                            </li>
                            </>
                        )}
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;