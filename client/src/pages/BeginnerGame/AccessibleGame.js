import React, {Component} from 'react';
import catImage from "../../assets/images/c1.svg";
import carImage from "../../assets/images/c2.svg";
import burgerImage from "../../assets/images/b.png";
import CatClickNavigate from '../../components/helpers/CatClickNavigate.js'

class AcccessibleGame extends Component {
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
                <h1 style={textStyle} tabIndex={"0"}>Accessible Game</h1>
                <p style={textStyle} tabIndex={"0"}>Click on the image of a cat. You can use the keyboard to
                    navigate by tabbing across the page. Press the enter key to select.</p>
                <table style={tableStyle} tabIndex={"0"}>
                    <tbody>
                    <tr>
                        <td tabIndex={"0"}><input style={imgStyle} type={"image"} src={catImage}
                                                  onClick={() => catClick()} alt={"image of cat"} tabIndex={"0"}/></td>
                        <td tabIndex={"0"}><input style={imgStyle} type={"image"} src={carImage}
                                                  onClick={() => carClick()} alt={"image of car"} tabIndex={"0"}/></td>
                    </tr>
                    <tr>
                        <td tabIndex={"0"}><input style={imgStyle} type={"image"} src={burgerImage}
                                                  onClick={() => burgerClick()} alt={"image of burger"} tabIndex={"0"}/>
                        </td>
                        <td tabIndex={"0"}><input style={imgStyle} type={"image"} src={catImage}
                                                  onClick={() => catClick()} alt={"image of cat"} tabIndex={"0"}/></td>
                    </tr>
                    </tbody>
                </table>
                {this._renderSubComp()}
            </div>

        );
    }
}

export default AcccessibleGame;
