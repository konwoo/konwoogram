import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userAction } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        facebookLogin: (access_token) => {
            dispatch(userAction.facebookLogin(access_token));
        }
    }
}


export default connect(null, mapDispatchToProps)(Container);