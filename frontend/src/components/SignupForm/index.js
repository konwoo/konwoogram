import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userAction } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        facebookLogin: (access_token) => {
            dispatch(userAction.facebookLogin(access_token));
        },
        createAccount: (username, password, email, name) => {
            dispatch(userAction.createAccount(username, password, email, name));
        }
    }
}


export default connect(null, mapDispatchToProps)(Container);