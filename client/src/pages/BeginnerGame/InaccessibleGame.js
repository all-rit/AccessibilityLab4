import React, {Component} from 'react';
import catImage from "../../assets/images/c1.svg";
import carImage from "../../assets/images/c2.svg";
import burgerImage from "../../assets/images/b.png";
import CatClickNavigate from '../../components/helpers/CatClickNavigate.js'
import {navigate} from "@reach/router";
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class InaccessibleGame extends Component {
    constructor(props) {
        super(props);
        this.state = {render: ''};
        document.body.style = 'background: black';
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    _renderSubComp(path) {
        if (this.state.render === 'CatClickNavigate') {
            return <CatClickNavigate path={path}/>
        }
    }

    handleKeyDown(event) {
        console.log('detected key code is: ' + event.keyCode);
        if (event.keyCode === 27) {
            console.log('Enter key pressed!');
            navigate("/Lab4/AccessibleInstructions");
        }
    }

    onFocusGain(event, className) {
        console.log('focus gained');
        const element = document.getElementsByClassName(className);
        for (var i = 0; i < element.length; i++) {
            element[i].style = {borderColor: 'red'};
        }
    }

    onFocusLoss(event, className) {
        console.log('focus lost');
        const element = document.getElementsByClassName(className);
        for (var i = 0; i < element.length; i++) {
            element[i].style = {borderColor: 'black'};
        }
    }

    render() {

        const catClick = () => {
            console.log('Cat image clicked!');
            this.setState({render: 'CatClickNavigate'});
        };
        const burgerClick = () => {
            console.log('Burger image clicked!');
        };
        const carClick = () => {
            console.log('Car image clicked!');
        };

        const imgStyle = {
            width: "128px", height: "128px", border: "1px solid black", opacity: "0.0",
            tabIndex: "0"
        };
        const tableStyle = {
            border: "1px solid black", marginLeft: "auto", marginRight: "auto",
            textAlign: "center", tabIndex: "0"
        };
        const appBarStyle = {flexGrow: "1"};
        const textStyle = {color: 'white', tabIndex: "0"};
        return (
            <div>
                <AppBar position="static" color={"black"} style={appBarStyle}>
                    <Toolbar>
                        <Grid
                            justify="center"
                            container
                            spacing={10}
                            aria-label={"Page Title Grid"}
                        >
                            <Grid item>
                                <Typography variant={"h4"} color={"white"}
                                            aria-label={"Inaccessible Game"} tabIndex={"0"}>
                                    Inaccessible Game
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Typography variant={"h6"} style={textStyle} tabIndex={"0"}>Click on the image of a cat. You can use the keyboard to
                    navigate by tabbing across the page. Press the enter key to select.
                </Typography>
                <table style={tableStyle} tabIndex={"0"}>
                    <tbody>
                    <tr>
                        <td tabIndex={"0"}><input style={imgStyle} type={"image"} src={catImage}
                                                  onClick={() => catClick()} alt={""} tabIndex={"0"}
                                                  onKeyDown={this.handleKeyDown}
                                                  onFocus={this.onFocusGain}
                                                  onKeyPress={this.handleKeyDown.bind(this, 'c1')}
                                                  onfocusout={this.onFocusLoss.bind(this, 'c1')}
                                                  className={"c1"}/>
                        </td>
                        <td tabIndex={"0"}><input style={imgStyle} type={"image"} src={carImage}
                                                  onClick={() => carClick()} alt={""} tabIndex={"0"}
                                                  onKeyDown={this.handleKeyDown}
                                                  onFocus={this.onFocusGain}
                                                  onKeyPress={this.handleKeyDown.bind(this, 'c2')}
                                                  onfocusout={this.onFocusLoss.bind(this, 'c2')}
                                                  className={"c2"}/>
                        </td>
                    </tr>
                    <tr>
                        <td tabIndex={"0"}><input style={imgStyle} type={"image"} src={burgerImage}
                                                  onClick={() => burgerClick()} alt={""}
                                                  tabIndex={"0"}
                                                  onKeyDown={this.handleKeyDown}
                                                  onFocus={this.onFocusGain}
                                                  onKeyPress={this.handleKeyDown.bind(this, 'c3')}
                                                  onfocusout={this.onFocusLoss.bind(this, 'c3')}
                                                  className={"c3"}/></td>
                        <td tabIndex={"0"}><input style={imgStyle} type={"image"} src={catImage}
                                                  onClick={() => catClick()} alt={""}
                                                  tabIndex={"0"}
                                                  onKeyDown={this.handleKeyDown}
                                                  onKeyPress={this.handleKeyDown}
                                                  onFocus={this.onFocusGain.bind(this, 'c4')}
                                                  onfocusout={this.onFocusLoss.bind(this, 'c4')}
                                                  className={"c4"}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                {this._renderSubComp("/Lab4/AccessibleInstructions")}
            </div>

        );
    }
}

export default InaccessibleGame;
