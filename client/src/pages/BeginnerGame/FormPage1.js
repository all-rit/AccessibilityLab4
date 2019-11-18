import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from "../../components/main/Header";
import Card from '@material-ui/core/Card';
import {actions as appActions} from '../../reducers/AppReducer';
import AppInstructions from '../../components/main/AppInstructions'
import StickyFooter from "../../components/helpers/StickyFooter";
import ExtraNav from '../../components/main/ExtraNav';
import FormComp from '../../components/main/FormComp';

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


class FirstPage extends Component {

    render() {
        const {
            user,
            state,
            plays
        } = this.props;
        const instructions = "Complete the form below. Use tab to go next, and shift+tab to go back";
        const url = "/FormPage2";
        return (
            <Fragment>
                <div>
                    <Header state={state} user={user} plays={plays}/>
                </div>
                <ExtraNav/>
                <AppInstructions instructions={instructions}/>
                <FormComp url={url} />

            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);
