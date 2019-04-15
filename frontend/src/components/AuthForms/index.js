import React from 'react';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import styles from './styles.scss';

export const LoginForms = props => (
    <div className={styles.formComponents}>
        <form className={styles.form}>
            <input className={styles.textInput} type="text" placeholder="Username"/>
            <input className={styles.textInput} type="password" placeholder="Password"/>
            <input className={styles.button} type="submit" placeholder="Log in"/>
        </form>
        <span className={styles.divider}>or</span>
        <span className={styles.facebookLink}>
            <LogoFacebook fontSize="20px" color="#385185"/>
            Log in with Facebook
        </span>
        <span className={styles.forgotLink}>Forgot password?</span>
    </div>
);


export const SignupForms = props => (
    <div className={styles.formComponents}>
        <h3 className={styles.signupHeader}>Sign up to see photos and videos from your friends</h3>
        <button className={styles.button}>
            {" "}
            <LogoFacebook fontSize="20px" color="white"/>
            Log in with Facebook
        </button>
        <span className={styles.divider}>or</span>
    <form className={styles.form}>
        <input className={styles.textInput} type="email" placeholder="Email"/>
        <input className={styles.textInput} type="text" placeholder="Full Name"/>
        <input className={styles.textInput} type="username" placeholder="Username"/>
        <input className={styles.textInput} type="password" placeholder="Password"/>
        <input className={styles.button} type="submit" placeholder="Sign up"/>
    </form>
    <p className={styles.terms}>
        By signing up, you agree to our <span>Terms & Privacy Policy</span>.
    </p>
    </div>
)