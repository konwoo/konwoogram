import React from 'react';
import Proptypes from 'prop-types';
import styles from './styles.scss';
import Loading from 'components/Loading';

const Feed = (props, context) => {
    if(props.loading) {
        return <LoadingFeed />
    }
};

const LoadingFeed = props => (
    <div className={styles.feed}>
        <Loading />
    </div>
)
        
Feed.propTypes = {
    loading: Proptypes.bool.isRequired
}

Feed.contextTypes = {
    t: Proptypes.func.isRequired
};

export default Feed;