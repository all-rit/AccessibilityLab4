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
                    <h2 className="app__instructions__small">Congratulations on finishing the module!</h2>
                    <Button href="/" component={Link} variant={"contained"} color={"primary"}
                            style={buttonStyle}>
                        Home</Button>
                </div>
                <StickyFooter/>

            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SixthPage);
