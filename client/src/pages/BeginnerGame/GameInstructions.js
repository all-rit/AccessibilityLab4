import React, {Component} from 'react';
import {Button, Link} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import StickyFooter from "../../components/helpers/StickyFooter";

class GameInstructions extends Component {

    render() {

        const appBarStyle = {flexGrow: "1"};
        const paperStyle = {marginLeft: "10px", marginRight: "10px", marginTop: "20px"};
        return (
            <div>
                <AppBar position="static" color={"primary"} style={appBarStyle}>
                    <Toolbar>
                        <Typography variant={"h4"} aria-label={"Instructions"}> Instructions </Typography>
                    </Toolbar>
                </AppBar>
                <Paper style={paperStyle}>
                    <Typography variant={"h6"} color={"inherit"} paragraph={true}>
                        You clicked on an image. However, without the ability to see, it may be
                        difficult to decipher what these images represent.
                        Please make sure you are using
                        <Link component={Link} href={"https://www.google.com/chrome/"}> Google
                            Chrome</Link>. Please install the <Link component={Link}
                                                                    href={"https://chrome.google.com/webstore/"
                                                                    + "detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en"}>ChromeVox</Link> screenreader(If
                        not already installed).
                        Please make sure that ChromeVox is active and then click the 'next' button to experience what a
                        similar, simple activity might look like to someone who is blind.
                    </Typography>
                </Paper><br/>
                <Button href={"/Lab4/InAccessibleGame"} variant={"contained"} color={"primary"}>
                    Next
                </Button>
                <StickyFooter/>
            </div>
        );
    }
}

export default GameInstructions;