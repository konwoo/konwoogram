import React from 'react';
import styles from './styles.scss';
import IonIcon from 'react-ionicons/lib/IosHeartOutline';
import IonIcon1 from 'react-ionicons/lib/IosTextOutline';
import PropTypes from 'prop-types';

const PhotoAction = (props, context) => (
    <div >
        <div>
            <span>
                <IonIcon fontSize="28px" color="black"/>
            </span>
            <span>
                <IonIcon1 fontSize="28px" color="black"/>
            </span>
        </div>
        <span>{props.number} {props.number === 1 ? context.t("like") : context.t("likes")}</span>
    </div>
);

PhotoAction.contextTypes = {
    t: PropTypes.func.isRequired
}

PhotoAction.protoType = {
    number: PropTypes.number.isRequired
}

export default PhotoAction;