import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoAction } from 'redux/modules/photo';

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        submitComment: (message) => {
            dispatch(photoAction.commentPhoto(ownProps.photoId, message))
        }
    }

}

export default connect(null, mapDispatchToProps)(Container);