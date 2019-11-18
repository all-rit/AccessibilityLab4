import React, {Component} from 'react';
import {Button} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import StickyFooter from "../../components/helpers/StickyFooter";

class AccessibleInstructions extends Component {

    constructor(props) {
        super(props);
        document.body.style = 'background: white';
    }


    render() {
        const paperStyle = {marginLeft: "10px", marginRight: "10px", marginTop: "20px"};
        const appBarStyle = {flexGrow: "1"};
        return (
            <div>
                <AppBar position="static" color={"primary"} style={appBarStyle}>
                    <Toolbar>
                        <Typography variant={"h4"} aria-label={"Instructions"} tabIndex={"0"}
                                    color={"inherit"}>
                            Instructions
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Paper style={paperStyle}>
                    <Typography variant={"h6"} aria-label={"Game Instructions"} tabIndex={"0"}
                                paragraph={true} display={"block"}>
                        You clicked on an image. However, without the ability to see,
                        it may be difficult to decipher what these images represent.
                        The previous page demonstrated how difficult it was to use a page
                        that was inaccessible.
                        In order to make the pages readable by a screenreader we need to be add
                        'alt' attributes to content which will help improve accessibility.<br/>
                    </Typography>
                </Paper>
                <Paper style={paperStyle}>
                    <Typography display={"inline"} variant={"h5"}>Note:</Typography>
                    <Typography variant={"h6"} aria-label={"Note:"} tabIndex={"0"}
                                paragraph={true} display={"block"}>
                        In the actual project we will show instructions on how to make the page
                        more accessible to users. Participants will also be lead through the activity
                        of repairing the code.
                    </Typography>
                </Paper>
                <Button href={"/Lab4/CodeChange"} variant={"contained"} color={"primary"}>Next</Button>
                <StickyFooter/>
            </div>
        );
    }
}

export default AccessibleInstructions;