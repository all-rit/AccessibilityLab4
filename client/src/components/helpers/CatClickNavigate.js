import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from "@material-ui/core";
import {navigate} from "@reach/router";
import Typography from "@material-ui/core/Typography";

class CatClickNavigate extends Component {

    constructor(props) {
        super(props);
        const {
            path
        }
            = this.props;
        CatClickNavigate.handleOnclick = CatClickNavigate.handleOnclick.bind(this, path)
    }

    static handleOnclick(path) {
        navigate(path);
    }

    render() {
        const typographyStyle = {color: "white"};
        return (

            <div id={"catClickMessage"}>
                <Typography variant={"h6"} aria-label={"Cat clicked! Please click the 'next' button to continue."}
                            tabIndex={"0"} style={typographyStyle}>
                    Cat clicked! Please click the 'next' button to continue.
                </Typography>
                <Button component={Link} onClick={CatClickNavigate.handleOnclick} variant="contained">Next</Button>
            </div>
        );
    }
}

export default CatClickNavigate;