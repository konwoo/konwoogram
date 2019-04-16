import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import formStyles from 'shared/formStyles.scss';

const SignupForm = (props, context) => (
    <div className={formStyles.formComponents}>
        <h3 className={formStyles.signupHeader}>{context.t("Sign up to see photos and videos from your friends")}</h3>
            <FacebookLogin 
                appId="2111448448943533"
                autoLoad={false}
                fields="name,email,picture"
                callback={props.handleFacebookLogin}
                cssClass={formStyles.button}
                icon="fa-facebook-official"
                textButton={context.t("Log in with Facebook")}
            />
        <span className={formStyles.divider}>{context.t("or")}</span>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
        <input 
        className={formStyles.textInput}
        type="email" 
        placeholder={context.t("Email")}
        onChange={props.handleInputChange}
        name="email"
        />
        <input 
        className={formStyles.textInput}
        type="text" 
        placeholder={context.t("Full Name")}
        onChange={props.handleInputChange}
        name="fullName"
        />
        <input 
        className={formStyles.textInput}
        type="username" 
        placeholder={context.t("Username")}
        onChange={props.handleInputChange}
        name="username"
        />
        <input 
        className={formStyles.textInput}
        type="password" 
        placeholder={context.t("Password")}
        onChange={props.handleInputChange}
        name="password"
        />
        <input 
        className={formStyles.button}
        type="submit" 
        placeholder={context.t("Sign up")}
        />
    </form>
    <p className={formStyles.terms}>
        {context.t("By signing up, you agree to our")}
        <span>{context.t("Terms & Privacy Policy")}</span>.
    </p>
    </div>
);

SignupForm.propTypes = {
    emailValue: PropTypes.string.isRequired,
    fullNameValue: PropTypes.string.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    t: PropTypes.func.isRequired
};

export default SignupForm;