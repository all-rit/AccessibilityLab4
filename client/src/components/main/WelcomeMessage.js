import React, {Component} from 'react';

import LoginButton from './LoginButton';
import Signout from "./Signout";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions as appActions} from '../../reducers/AppReducer';
const mapStateToProps = (state) => ({
    state: state
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
});
class WelcomeMessage extends Component {

    render() {
        const {user} = this.props;
        if (user === null || user.firstname === null) {
            return <LoginButton enabled={true}/>;
        }
        else {
            return <Signout user={user.firstname}/>;
        }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (WelcomeMessage);
