import React from 'react';
import styles from './style.scss';
import PropTypes from "prop-types";
import SignupForm from "components/SignupForm";
import LoginForm from "components/LoginForm";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
        <img src={require("images/main_image.png")} alt={context.t("Checkout our App. Is Cool")}/>
    </div>
    <div className={styles.column}>
    <div className={`${styles.whiteBox} ${styles.formBox}`}>
        <img src={require("images/logo.png")} alt={context.t("Logo")}/>
        {props.action === "login" && <LoginForm />}
        {props.action === "signup" && <SignupForm />}
    </div>
        <div className={styles.whiteBox}>
        {props.action === "login" && ( 
            <p>{context.t("Don't have account?")} {" "}
                <span onClick={props.changeAction} className={styles.changeLink}>{context.t("Sign UP")}</span>
            </p>)}
        {props.action === "signup" && (
            <p className={styles.text}>{context.t("Have an account?")} {" "}
                <span onClick={props.changeAction} className={styles.changeLink}>{context.t("Log in")}</span>
            </p>
        )}
        </div>
        <div className={styles.appBox}>
            <span>{context.t("Get the app")}</span>
            <div className={styles.appstores}>
                <img src={require("images/ios.png")} alt={context.t("Download it on Apple Appstore")}/>
                <img src={require("images/android.png")} alt={context.t("Download it on Android Appstore")}/>
            </div>
        </div>
    </div>
  </main>  
);

Auth.contextTypes = {
    t: PropTypes.func.isRequired
}

export default Auth;