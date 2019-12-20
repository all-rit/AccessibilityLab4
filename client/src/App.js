import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from '@reach/router';
import './assets/stylesheets/main.scss';
import CodeChange2 from './pages/CodeChange2';
import {actions} from './reducers/AppReducer';
import First from './pages/FirstPage';
import Form1 from './pages/FormPage1';
import SixthPage from './pages/SixthPage'
import Second from './pages/SecondPage';
import Main from './pages/Main';
import CodeChange from './pages/CodeChange';
import SubmitUpdated from './pages/SubmitUpdated';
import FormUpdated from "./pages/FormUpdated";
import FormPage2 from "./pages/FormPage2";
import TenthPage from "./pages/TenthPage"
import CodeChange3 from './pages/CodeChange3';
import FormPage2Updated from "./pages/FormPage2Updated";
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
                <First path="/first"/>
                <Second path="/second"/>
                <SubmitUpdated path="/SubmitUpdated"/>
                <CodeChange path={'/CodeChange'}/>
                <CodeChange2 path={'/CodeChange2'}/>
                <SixthPage path={'/SixthPage'}/>
                <Form1 path={'/FormPage1'}/>
                <FormUpdated path={'/FormUpdated'}/>
                <FormPage2 path={'/FormPage2'}/>
                <TenthPage path={'/TenthPage'}/>
                <CodeChange3 path={'/CodeChange3'}/>
                <FormPage2Updated path={'/FormPage2Updated'}/>
                <Finish path={'/Finish'}/>
            </Router>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
