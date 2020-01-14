import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Header from "../components/main/Header";
import {actions as appActions} from '../reducers/AppReducer';
import AppInstructions from '../components/main/AppInstructions'
import StickyFooter from "../components/helpers/StickyFooter";
import ReactDOM from "react-dom";
import PageService from "../services/PageService";
import {navigate} from "@reach/router";

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
    constructor(props) {
        super(props);
        this.state = {secondsElapsed: 0, marginRight: this.style.marginRight+"px", marginLeft: this.style.marginLeft +"px", width:this.style.width +"px", height:this.style.height +"px", fontSize: this.style.fontSize +"px", top:"px", left:"px"};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (window.location.state !== undefined ) {
            this.setState({width: window.location.state.width + "px", height: window.location.state.height + "px"});
        }
        this.interval = setInterval(()=>this.setState({secondsElapsed: this.state.secondsElapsed + 1}), 1000)

    }
    style = {marginRight: 10, marginLeft: 10, width:44, height:44, fontSize: 10};
    wiggle = (e) => {
        let distX =this.calculateDistanceX(this.myDiv, e.screenX);
        let distY =this.calculateDistanceY(this.myDiv, e.screenY);
        let right = -distX/2 ;
        let top = distY/2;
        this.setState({right: right+"px", top:top +"px"})
    };

    calculateDistanceX(elem, mouseX) {
        return Math.floor(mouseX - (elem.offsetLeft+(this.style.width/2)));
    }
    calculateDistanceY(elem, mouseY) {
        return Math.floor(mouseY - (elem.offsetTop+(this.style.height/2)));
    }

    handleSubmit(){
        const name = "SubmitUpdated";
        PageService.createPage(name, this.state.secondsElapsed);
        navigate(process.env.PUBLIC_URL+'/FormSkipToMainBroken');
    }


    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {
            user,
            state
        } = this.props;
        const plays = 4;
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
                    <Button  ref = {c => this.myDiv = c} href="#" onClick={this.handleSubmit} component={Link} variant={"contained"} color={"primary"}
                            style={this.state} >
                        Start</Button>
                    </div>
                </div>
                <StickyFooter/>
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitUpdated);
