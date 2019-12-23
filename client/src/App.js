import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from '@reach/router';
import './assets/stylesheets/main.scss';
import CodeChangeBlocks from './pages/CodeChangeBlocks';
import {actions} from './reducers/AppReducer';
import SmallTarget from './pages/SmallTarget';
import FormSkipToMainBroken from './pages/FormSkipToMainBroken';
import BypassBlocksGuideline from './pages/BypassBlocksGuideline'
import TargetGuideline from './pages/TargetGuideline';
import Main from './pages/Main';
import CodeChangeTarget from './pages/CodeChangeTarget';
import SubmitUpdated from './pages/SubmitUpdated';
import FormSkipToMainFixed from "./pages/FormSkipToMainFixed";
import FormHintInaccessible from "./pages/FormHintInaccessible";
import AccessibleGuideline from "./pages/AccessibleGuideline"
import CodeChangeAccessible from './pages/CodeChangeAccessible';
import FormHintAccessible from "./pages/FormHintAccessible";
import Finish from './pages/Finish';

const mapStateToProps = (state) => ({
    state: state
});
const mapDispatchToProps = {
    login: actions.login,
    logout: actions.logout,
    updateUser: actions.updateUser
};

// eslint-disable-next-line require-jsdoc
class App extends Component {
    // eslint-disable-next-line require-jsdoc
    componentDidMount() {
        const {user} = this.props;
        console.log(user);
        this.props.login();
    }

    // eslint-disable-next-line require-jsdoc
    render() {
        return (
            <Router basepath={process.env.PUBLIC_URL} className="app">
                <Main path="/"/>
                <SmallTarget path="/SmallTarget"/>
                <TargetGuideline path="/TargetGuideline"/>
                <SubmitUpdated path="/SubmitUpdated"/>
                <CodeChangeTarget path={'/CodeChangeTarget'}/>
                <CodeChangeBlocks path={'/CodeChangeBlocks'}/>
                <BypassBlocksGuideline path={'/BypassBlocksGuideline'}/>
                <FormSkipToMainBroken path={'/FormSkipToMainBroken'}/>
                <FormSkipToMainFixed path={'/FormSkipToMainFixed'}/>
                <FormHintInaccessible path={'FormHintInaccessible'}/>
                <AccessibleGuideline path={'/AccessibleGuideline'}/>
                <CodeChangeAccessible path={'/CodeChangeAccessible'}/>
                <FormHintAccessible path={'/FormHintAccessible'}/>
                <Finish path={'/Finish'}/>
            </Router>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
