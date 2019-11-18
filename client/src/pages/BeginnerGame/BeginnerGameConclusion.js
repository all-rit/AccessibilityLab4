import React, {Component} from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import StickyFooter from "../../components/helpers/StickyFooter";

class BeginnerGameConclusion extends Component {
    render() {

        const appBarStyle = {flexGrow: "1"};
        const conclusionTypographyStyle = {marginTop:"20px"};
        return (
            <div>
                <AppBar position="static" color={"primary"} style={appBarStyle}>
                    <Toolbar>
                        <Grid
                            justify="center"
                            container
                            spacing={10}
                        >
                            <Grid item>
                                <Typography variant={"h4"}>
                                    Conclusion
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <Typography variant={"h6"} paragraph={true} style={conclusionTypographyStyle}>
                    You have successfully completed the activity!
                    Click on the home button to return to the main page
                </Typography>
                <Button href={"/Lab4/"} variant={"contained"} color={"primary"}>
                    Home
                </Button>
                <StickyFooter/>
            </div>
        );
    }
}

export default BeginnerGameConclusion;