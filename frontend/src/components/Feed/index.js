import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from 'redux/modules/photo';

const matchStateProps = (state, ownProps) => {
    const { photos: { feed } } = state;
    return {
        feed
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getFeed: () => {
            dispatch(photoActions.getFeed())
        }
    }
}

export default connect(matchStateProps, mapDispatchToProps)(Container);
