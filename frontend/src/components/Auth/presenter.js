import React from 'react';
import styles from './style.scss';

import { LoginForms, SignupForms } from "components/AuthForms";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
        <img src={require("images/main_image.png")} alt="Checkout our App. Is Cool"/>
    </div>
    <div className={styles.column}>
    <div className={`${styles.whiteBox} ${styles.formBox}`}>
        <img src={require("images/logo.png")} alt="Logo"/>
        {props.action === "login" && <LoginForms />}
        {props.action === "signup" && <SignupForms />}
    </div>
        <div className={styles.whiteBox}>
        {props.action === "login" && ( 
            <p>Don't have account? {" "}
                <span onClick={props.changeAction} className={styles.changeLink}>Sign UP</span>
            </p>)}
        {props.action === "signup" && (
            <p className={styles.text}>Have an account? {" "}
                <span onClick={props.changeAction} className={styles.changeLink}>Log in</span>
            </p>
        )}
        </div>
        <div className={styles.appBox}>
            <span>Get the app</span>
            <div className={styles.appstores}>
                <img src={require("images/ios.png")} alt="Download it on Apple Appstore"/>
                <img src={require("images/android.png")} alt="Download it on Android Appstore"/>
            </div>
        </div>
    </div>
  </main>  
);

export default Auth;