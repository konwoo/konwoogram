import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import formStyles from 'shared/formStyles.scss';

const LoginForm = (props, context) => (
    <div className={formStyles.formComponents}>
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
            <input 
                className={formStyles.textInput} 
                type="text" 
                placeholder={context.t("Username")} 
                value={props.usernameValue} 
                onChange={props.handleInputChange} 
                name="username"
            />
            <input
                className={formStyles.textInput} 
                type="password" 
                placeholder={context.t("Password")} 
                value={props.passwordValue} 
                onChange={props.handleInputChange} 
                name="password"
             />
            <input className={formStyles.button} type="submit" placeholder={context.t("Log in")}/>
        </form>
        <span className={formStyles.divider}>or</span>
            <FacebookLogin 
                appId="2111448448943533"
                autoLoad={false}
                fields="name,email,picture"
                callback={props.handleFacebookLogin}
                cssClass={formStyles.facebookLink}
                icon="fa-facebook-official"
                textButton={context.t("Log in with Facebook")}
            />
        <span className={formStyles.forgotLink}>{context.t("Forgot password?")}</span>
    </div>
);

LoginForm.propTypes = {
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
};

LoginForm.contextTypes = {
    t: PropTypes.func.isRequired
};

export default LoginForm;