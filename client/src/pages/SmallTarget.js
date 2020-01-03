import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {navigate} from "@reach/router";
import Header from "../components/main/Header";
import {actions as appActions} from '../reducers/AppReducer';
import AppInstructions from '../components/main/AppInstructions'
import StickyFooter from "../components/helpers/StickyFooter";
import ReactDOM from "react-dom";
import PageService from '../services/PageService';

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


class SmallTarget extends Component {
    constructor(props) {
        super(props);
        this.state = {secondsElapsed:0,marginRight: this.style.marginRight+"px", marginLeft: this.style.marginLeft +"px", width:this.style.width +"px", height:this.style.height +"px", fontSize: this.style.fontSize +"px", top:"px", left:"px"};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        // console.log(this.constructor.name);
        // console.log(this.state.secondsElapsed);
        PageService.createPage(this.constructor.name, this.state.secondsElapsed);
        navigate(process.env.PUBLIC_URL+'/TargetGuideline');
    }
    componentDidMount() {
        this.interval = setInterval(()=>this.setState({secondsElapsed: this.state.secondsElapsed + 1}), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    style = {marginRight: 10, marginLeft: 10, width:20, height:17, fontSize: 10};
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
                    <Header state={state} user={user} plays={1}/>
                </div>
                <div>
                    <h1 className="app__name">Dexterity Lab</h1>
                    <AppInstructions instructions={instructions}/>
                    <div style={{width:"300px", height:"300px", margin:"auto", paddingTop:"50px"}} onMouseMove={e =>this.wiggle(e)}>
                    <Button  ref = {c => this.myDiv = c} onClick={this.handleSubmit} component={Link} variant={"contained"} color={"primary"}
                            style={this.state} className="app__wiggle">
                        Start</Button>
                    </div>
                </div>
                <StickyFooter/>
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmallTarget);
