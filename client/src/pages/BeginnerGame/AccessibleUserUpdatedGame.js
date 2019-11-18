import React, {Component} from 'react';
import catImage from "../../assets/images/c1.svg";
import carImage from "../../assets/images/c2.svg";
import cowImage from "../../assets/images/cow.jpg"
import burgerImage from "../../assets/images/b.png";
import CatClickNavigate from '../../components/helpers/CatClickNavigate.js'
import {Typography} from "@material-ui/core";

class AcccessibleUserUpdatedGame extends Component {
    constructor(props) {
        super(props);
        this.state = {render: ''};
        document.body.style = 'background: black';
    }

    _renderSubComp() {
        if (this.state.render === 'CatClickNavigate') {
            return <CatClickNavigate path={"/Lab4/CodeChange"}/>
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

        const imgStyle = {width: "128px", height: "128px", border: "1px solid black", opacity: "0.0", tabIndex: "0"};
        const tableStyle = {
            border: "1px solid black",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            tabIndex: "0"
        };
        const textStyle = {color: "white", tabIndex: "0"};
        return (
            <div>
                <Typography variant={"h4"} aria-label={"Accessible Game"} style={textStyle} tabIndex={"0"}>Accessible Game</Typography>
                <Typography variant={"h6"} aria-label={"Click on the image of a cat. You can use the keyboard to navigate by tabbing across the page. Press the enter key to select."}
                            style={textStyle} tabIndex={"0"}>Click on the image of a cat. You can use the keyboard to
                    navigate by tabbing across the page. Press the enter key to select.</Typography>
                <table style={tableStyle} tabIndex={"0"}>
                    <tbody>
                    <tr>
                        <td tabIndex={"0"}><input style={imgStyle} type={"image"} src={catImage}
                                                  onClick={() => catClick()}
                                                  alt={(window.location.state.catAltValue).replace(/<[^>]*>?/gm, '')}
                                                  tabIndex={"0"}/></td>
                        <td tabIndex={"0"}><input style={imgStyle} type={"image"} src={carImage}
                                                  onClick={() => carClick()}
                                                  alt={(window.location.state.carAltValue).replace(/<[^>]*>?/gm, '')}
                                                  tabIndex={"0"}/></td>
                    </tr>
                    <tr>
                        <td tabIndex={"0"}><input style={imgStyle} type={"image"} src={burgerImage}
                                                  onClick={() => burgerClick()} alt={(window.location.state.burgerAltValue).replace(/<[^>]*>?/gm, '')} tabIndex={"0"}/>
                        </td>
                        <td tabIndex={"0"}><input style={imgStyle} type={"image"} src={cowImage}
                                                  onClick={() => catClick()} alt={(window.location.state.cowAltValue).replace(/<[^>]*>?/gm, '')} tabIndex={"0"}/></td>
                    </tr>
                    </tbody>
                </table>
                {this._renderSubComp()}
            </div>

        );
    }
}

export default AcccessibleUserUpdatedGame;
