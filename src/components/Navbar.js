import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return(
        <div className={styles.nav}>
            
            <div className={styles.leftDiv}>
            <a href='/'>
                <img src='https://cdn-icons-png.flaticon.com/512/2504/2504903.png' className={styles.siteLogo}></img>
            </a>
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
                            <a href='/'>Log in</a>
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