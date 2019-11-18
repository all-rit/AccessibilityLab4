import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Header from "../../components/main/Header";
import {actions as appActions} from '../../reducers/AppReducer';
import AppInstructions from '../../components/main/AppInstructions'
import StickyFooter from "../../components/helpers/StickyFooter";
import ReactDOM from "react-dom";

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


class SubmitUpdated extends Component {
    style = {marginRight: 10, marginLeft: 10, width:window.location.state.width, height:window.location.state.height, fontSize: 10};
    state = {marginRight: this.style.marginRight+"px", marginLeft: this.style.marginLeft +"px", width:this.style.width +"px", height:this.style.height +"px", fontSize: this.style.fontSize +"px", top:"px", left:"px"};
    wiggle = (e) => {
        let distX =this.calculateDistanceX(this.myDiv, e.screenX);
        let distY =this.calculateDistanceY(this.myDiv, e.screenY);
        let left = 50/(distX);
        let top = 50/(distY);
        console.log(distX);
        console.log(distX);
        this.setState({left: left+"px", top:top +"px"})
    };

    calculateDistanceX(elem, mouseX) {
        return Math.floor(mouseX - (elem.offsetLeft+(this.style.width/2)));
    }
    calculateDistanceY(elem, mouseY) {
        return Math.floor(mouseY - (elem.offsetTop+(this.style.height/2)));
    }

    render() {
        const {
            user,
            state,
            plays
        } = this.props;
        const instructions = "Click the start button";
        return (
            <Fragment>
                <div>
                    <Header state={state} user={user} plays={plays}/>
                </div>
                <div>
                    <h1 className="app__name">Dexterity Lab</h1>
                    <AppInstructions instructions={instructions}/>
                    <div style={{width:"200px", height:"200px", margin:"auto", paddingTop:"30px"}} onMouseMove={e =>this.wiggle(e)}>
                    <Button  ref = {c => this.myDiv = c} href="/form1" component={Link} variant={"contained"} color={"primary"}
                            style={this.state} className="app__wiggle">
                        Start</Button>
                    </div>
                </div>
                <StickyFooter/>
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitUpdated);
