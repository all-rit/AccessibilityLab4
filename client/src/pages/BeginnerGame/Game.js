import React, { Component } from 'react';
import catImage from "../../assets/images/c1.svg";
import carImage from "../../assets/images/c2.svg";
import burgerImage from "../../assets/images/b.png";
import CatClickNavigate from '../../components/helpers/CatClickNavigate.js'
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import StickyFooter from "../../components/helpers/StickyFooter";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = { render: '' };
    }

    _renderSubComp() {
        if (this.state.render === 'CatClickNavigate') {
            return <CatClickNavigate path={"/Lab4/GameInstructions"} />
        }
    }

    render() {
        const catClick = () => {
            console.log('Cat image clicked!');
            this.setState({ render: 'CatClickNavigate' });
        };
        const burgerClick = () => {
            console.log('Burger image clicked!');
        };
        const carClick = () => {
            console.log('Car image clicked!');
        };
        const appBarStyle = { flexGrow: "1" };
        const imgStyle = { width: "128px", height: "128px", border: "1px solid black" };
        const tableStyle = { border: "1px solid black", marginLeft: "auto", marginRight: "auto", textAlign: "center" };
        return (
            <div>
                <AppBar position="static" color={"primary"} style={appBarStyle}>
                    <Toolbar>
                        <Typography variant={"h4"} aria-label={"Click on the image of a cat"}
                            color={"inherit"}>
                            Click on the image of a cat.
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br />
                <table style={tableStyle} className={"center"}>
                    <tbody>
                        <tr>
                            <td>
                                <button style={imgStyle} onClick={() => catClick()} >
                                    <img src={catImage} alt={""}/>
                                </button>
                            </td>
                            <td>
                                <button style={imgStyle} onClick={() => carClick()}  >
                                    <img src={carImage} alt={""}/>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button style={imgStyle} onClick={() => burgerClick()} ><img src={burgerImage} alt={""}/></button>
                            </td>
                            <td>
                                <button style={imgStyle} onClick={() => catClick()} ><img src={catImage} alt={""}/></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {this._renderSubComp()}
                <StickyFooter />
            </div>

        );
    }
}

export default Game;
