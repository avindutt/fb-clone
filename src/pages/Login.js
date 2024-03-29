import { useToasts } from 'react-toast-notifications';
import styles from '../styles/login.module.css';
import { useState } from 'react';
import { useAuth } from '../hooks';
import { useNavigate, Navigate } from 'react-router-dom';

const Login = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loggingIn, setloggingIn] = useState(false);
    const { addToast } = useToasts();
    const auth = useAuth();
    const navigate = useNavigate(); 
    console.log(auth)

    const handleSubmit = async(e) => {
        e.preventDefault(); //to prevent the page from refresh everytime the input changes
        
        setloggingIn(true);

        if(!email || !password){
            return addToast('Please enter both email and password !',{
                appearance: 'error'
            })
        }

        const response = await auth.login(email, password);

        if(response.success) {
            addToast('Successfully logged in', {appearance: 'success'});
            // navigate('/');
            <Navigate to={'/'}/>
        } else {
            addToast(response.message, {appearance: 'error'});
        }
        setloggingIn(false);
    };

    if(auth.user) {
      return <Navigate to={'/'}/>
    };

    return(
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <span className={styles.loginSignupHeader}>Log In</span>

          <div className={styles.field}>
            <input type="email" placeholder='Email' value={email} 
            onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <input type="password" placeholder='Password' value={password}
            onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <div className={styles.field} >
            <button disabled={loggingIn} >{(loggingIn ? 'Logging in...' : 'Log In')}</button>
          </div>

        </form>
    );
};

export default Login;