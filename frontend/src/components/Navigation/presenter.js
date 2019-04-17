import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import Ionicon1 from 'react-ionicons/lib/IosCompassOutline';
import Ionicon2 from 'react-ionicons/lib/IosHeartOutline';
import Ionicon3 from 'react-ionicons/lib/IosPersonOutline';
import styles from './styles.scss';

const Navigation = (props, context) => (
    <div className={styles.navigation}>
        <div className={styles.inner}>
            <div className={styles.column}>
                <Link to="/">
                    <img 
                        src={require("images/logo.png")}
                        className={styles.logo}
                        alt={context.t("Logo")}
                    />
                </Link>
                
            </div>
            <div className={styles.column}>
                <input 
                    type="text"
                    placeholder={context.t("search")}
                    className={styles.searchInput}
                />
            </div>
            <div className={styles.column}>
                <div className={styles.navIcon}>
                    <Link to="/explore">
                        <Ionicon1 fontsize="20px" color="black"/>
                    </Link>
                </div>
                <div className={styles.navIcon}>
                    <Ionicon2 fontsize="20px" color="black"/>
                </div>
                <div className={styles.navIcon}>
                    <Link to="/profile">
                        <Ionicon3 fontsize="32px" color="black"/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)


Navigation.contextTypes = {
    t: Proptypes.func.isRequired
}

export default Navigation;