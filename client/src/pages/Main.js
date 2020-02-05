import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { actions as appActions } from "../reducers/AppReducer";
import AppInstructions from "../components/main/AppInstructions";
import { navigate } from "@reach/router";

const mapStateToProps = state => {
  return {
    // General
    user: state.app.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...appActions }, dispatch)
  };
};

class Main extends Component {
  handleSubmit() {
    navigate(process.env.PUBLIC_URL + "/SmallTarget");
  }
  render() {
    const instructions = "The next page will begin the lab";
    const buttonStyle = { marginRight: "10px", marginLeft: "10px" };
    return (
      <Fragment>
        <div>
          <AppInstructions instructions={instructions} />
          <Button
            href="#"
            onClick={this.handleSubmit}
            component={Link}
            variant={"contained"}
            color={"primary"}
            style={buttonStyle}
          >
            Start
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
