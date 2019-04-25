import React from 'react';
import styles from './styles.scss';
import IonIcon from 'react-ionicons/lib/IosHeartOutline';
import IonIcon1 from 'react-ionicons/lib/IosHeart';
import IonIcon2 from 'react-ionicons/lib/IosTextOutline';
import PropTypes from 'prop-types';

const PhotoAction = (props, context) => (
    <div className={styles.actions}>
        <div className={styles.icons}>
            <span className={styles.icon} onClick={props.handleHeartClick}>
            {
                props.isLiked ? (
                    <IonIcon1 fontSize="28px" color="#EB4B59"/>
                ) : (
                    <IonIcon fontSize="28px" color="black"/>
                )
            }
                
            </span>
            <span className={styles.icon}>
                <IonIcon2 fontSize="28px" color="black"/>
            </span>
        </div>
        <span className={styles.likes} onClick={props.openLikes}>
            {props.number} {" "}
            {props.number === 1 ? context.t("like") : context.t("likes")}
        </span>
    </div>
);

PhotoAction.contextTypes = {
    t: PropTypes.func.isRequired
}

PhotoAction.protoType = {
    number: PropTypes.number.isRequired,
    isLiked: PropTypes.bool.isRequired,
    photoId: PropTypes.number.isRequired,
    handleHeartClick: PropTypes.func.isRequired,
    openLikes: PropTypes.func.isRequired
}

export default PhotoAction;