import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoAction } from 'redux/modules/photo';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleHeartClick: () => {
            if(ownProps.isLiked) {
                dispatch(photoAction.unLikePhoto(ownProps.photoId))
            } else {
                dispatch(photoAction.likePhoto(ownProps.photoId))
            }
        }
    }

}

export default connect(null, mapDispatchToProps)(Container);