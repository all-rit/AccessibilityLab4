import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Header from "../components/main/Header";
import { actions as appActions } from "../reducers/AppReducer";
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

class TargetGuideline extends Component {
  handleSubmit() {
    navigate(process.env.PUBLIC_URL + "/CodeChangeTarget");
  }
  render() {
    const { user, state } = this.props;
    const plays = 4;
    const buttonStyle = { marginRight: "10px", marginLeft: "10px" };
    return (
      <Fragment>
        <div>
          <Header state={state} user={user} plays={plays} />
        </div>
        <div>
          <h1 className="app__name">Was That Difficult?</h1>
          <h2 className="app__instructions__small">
            People with mobile dexterity disabilities have a hard time clicking
            small buttons. To make sure your software is accessible by everyone,
            ensure that buttons follow the{" "}
            <a
              href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              WGAC 2.55 Target Guideline
            </a>
            . Buttons must be a minimum of 44 x 44 px. Go ahead and make the
            changes to the code by clicking “continue”.
          </h2>

          <Button
            component={Link}
            href="#"
            onClick={this.handleSubmit}
            variant={"contained"}
            color={"primary"}
            style={buttonStyle}
          >
            Continue
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TargetGuideline);
