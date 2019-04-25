import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const PhotoComments = props => (
    <div>
        <ul>
            <Comments username={props.creator} comments={props.caption}/>
            {props.comments.map(comment => (
                <Comments username={comment.creator.username} comment={comment.message} key={comment.id} />
            ))}
        </ul>
    </div>
);

const Comments = props => (
    <li>
        <span> {props.username} </span>
        <span> {props.comments} </span>
    </li>
)

PhotoComments.propTypes = {
    caption: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            creator: PropTypes.shape({
                profile_image: PropTypes.string,
                username: PropTypes.string.isRequired,
            }).isRequired
        })
    ).isRequired
}

export default PhotoComments;