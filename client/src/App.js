import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from '@reach/router';
import './assets/stylesheets/main.scss';

import {actions} from './reducers/AppReducer';
import First from './pages/BeginnerGame/FirstPage';
import Form1 from './pages/BeginnerGame/FormPage1';

import Second from './pages/BeginnerGame/SecondPage';
import Main from './pages/Main';
import Game from './pages/BeginnerGame/Game';
import InaccessibleGame from './pages/BeginnerGame/InaccessibleGame';
import GameInstructions from './pages/BeginnerGame/GameInstructions';
import AccessibleInstructions from './pages/BeginnerGame/AccessibleInstructions';
import AccessibleGame from './pages/BeginnerGame/AccessibleGame';
import CodeChange from './pages/BeginnerGame/CodeChange';
import HelloWorld from './pages/BeginnerGame/HelloWorld';
import AccessibleUserUpdatedGame from './pages/BeginnerGame/AccessibleUserUpdatedGame';
import BeginnerGameConclusion from './pages/BeginnerGame/BeginnerGameConclusion';
import SubmitUpdated from './pages/BeginnerGame/SubmitUpdated';
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
                <Game path="/game"/>
                <First path="/first"/>
                <Second path="/second"/>
                <SubmitUpdated path="/SubmitUpdated"/>
                <GameInstructions path={'/GameInstructions'}/>
                <InaccessibleGame path={'/InAccessibleGame'}/>
                <AccessibleInstructions path={'/AccessibleInstructions'}/>
                <AccessibleGame path={'/AccessibleGame'}/>
                <CodeChange path={'/CodeChange'}/>
                <Form1 path={'/form1'}/>

                <HelloWorld path={'/HelloWorld'}/>
                <AccessibleUserUpdatedGame path={'/AccessibleUserUpdatedGame'}/>
                <BeginnerGameConclusion path={'/BeginnerGameConclusion'}/>

            </Router>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
