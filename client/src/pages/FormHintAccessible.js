import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../components/main/Header";
import { actions as appActions } from "../reducers/AppReducer";
import AppInstructions from "../components/main/AppInstructions";
import ExtraNav from "../components/main/ExtraNav";
import FormComp from "../components/main/FormComp";

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

class FormHintAccessible extends Component {
  constructor(props) {
    super(props);
    this.btn = React.createRef();
  }
  state = { class: "app__instructions2" };
  callbackFunction = childData => {
    this.setState({ class: "app__instructions3" });
  };
  render() {
    const { user, state } = this.props;
    const instructions =
      "Complete the form below. Use tab to go next, and shift+tab to go back.";
    const instructions2 = "Do not use the mouse!";
    const url = process.env.PUBLIC_URL + "/Finish";
    const tab = "0";
    const name = "FormHintAccessible";
    return (
      <Fragment>
        <a className="skip-main" href="#main">
          Skip to main content
        </a>
        <div>
          <Header state={state} user={user} plays={3} />
        </div>
        <ExtraNav />
        <AppInstructions
          class={this.state.class}
          instructions2={instructions2}
          instructions={instructions}
        />
        <FormComp
          url={url}
          rule={true}
          tab={tab}
          parentCallback={this.callbackFunction}
          name={name}
        />
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormHintAccessible);
