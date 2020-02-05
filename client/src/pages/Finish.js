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

class SixthPage extends Component {
  handleSubmit() {
    navigate(process.env.PUBLIC_URL + "/");
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
          <h2 className="app__instructions__small">
            Congratulations on finishing the module!
          </h2>
          <Button
            href="#"
            onClick={this.handleSubmit}
            component={Link}
            variant={"contained"}
            color={"primary"}
            style={buttonStyle}
          >
            Home
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SixthPage);
