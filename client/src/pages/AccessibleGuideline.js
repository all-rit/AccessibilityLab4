import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from "../components/main/Header";
import Card from '@material-ui/core/Card';
import {actions as appActions} from '../reducers/AppReducer';
import AppInstructions from '../components/main/AppInstructions'
import StickyFooter from "../components/helpers/StickyFooter";

const mapStateToProps = (state) => {
    return {
        // General
        user: state.app.user,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({...appActions}, dispatch)
    };
};


class SixthPage extends Component {

    render() {
        const {
            user,
            state
        } = this.props;
        const plays = 4;
        const buttonStyle = {marginRight: "10px", marginLeft: "10px"};
        return (
            <Fragment>
                <div>
                    <Header state={state} user={user} plays={plays}/>
                </div>
                <div>
                    <h1 className="app__name">Was That Difficult?</h1>
                    <h2 className="app__instructions__small">People with mobile dexterity disabilities sometimes use a keyboard to navigate the page. It is imperative that elements that are accessible through mouse are also navigable by keyboard. Software should follow the <a href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html" target="_blank"> WGAC Guideline 2.1.1 Keyboard Accessible</a>: Make all functionality available from a keyboard.

                        Go ahead and make the changes to the code by clicking “continue”.</h2>

                    <Button href={process.env.PUBLIC_URL+'/CodeChangeAccessible'} component={Link} variant={"contained"} color={"primary"}
                            style={buttonStyle}>
                        Continue</Button>
                </div>
                <StickyFooter/>

            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SixthPage);
