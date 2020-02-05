import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import "./../../assets/stylesheets/main.scss";
import CodeChangeBlocks from "./../../pages/CodeChangeBlocks";
import { actions } from "./../../reducers/AppReducer";
import SmallTarget from "./../../pages/SmallTarget";
import FormSkipToMainBroken from "./../../pages/FormSkipToMainBroken";
import BypassBlocksGuideline from "./../../pages/BypassBlocksGuideline";
import TargetGuideline from "./../../pages/TargetGuideline";
import Main from "./../../pages/Main";
import CodeChangeTarget from "./../../pages/CodeChangeTarget";
import SubmitUpdated from "./../../pages/SubmitUpdated";
import FormSkipToMainFixed from "./../../pages/FormSkipToMainFixed";
import FormHintInaccessible from "./../../pages/FormHintInaccessible";
import AccessibleGuideline from "./../../pages/AccessibleGuideline";
import CodeChangeAccessible from "./../../pages/CodeChangeAccessible";
import FormHintAccessible from "./../../pages/FormHintAccessible";
import Finish from "./../../pages/Finish";

import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";

const mapStateToProps = state => ({
  state: state
});
const mapDispatchToProps = {
  login: actions.login,
  logout: actions.logout,
  updateUser: actions.updateUser
};

// eslint-disable-next-line require-jsdoc
class Game extends Component {
  // eslint-disable-next-line require-jsdoc
  componentDidMount() {
    const { user } = this.props;
    console.log(user);
    this.props.login();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <div class="container">
        <section class="page-section" style={{ paddingBottom: "25px" }}>
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <br />
                <br />
                <h2 class="section-heading text-uppercase">
                  Dexterity Lab: Game
                </h2>
              </div>
            </div>

            <div class="row">
              <Router basepath={process.env.PUBLIC_URL} className="app">
                <Main path="/" />
                <SmallTarget path="/SmallTarget" />
                <TargetGuideline path="/TargetGuideline" />
                <SubmitUpdated path="/SubmitUpdated" />
                <CodeChangeTarget path={"/CodeChangeTarget"} />
                <CodeChangeBlocks path={"/CodeChangeBlocks"} />
                <BypassBlocksGuideline path={"/BypassBlocksGuideline"} />
                <FormSkipToMainBroken path={"/FormSkipToMainBroken"} />
                <FormSkipToMainFixed path={"/FormSkipToMainFixed"} />
                <FormHintInaccessible path={"FormHintInaccessible"} />
                <AccessibleGuideline path={"/AccessibleGuideline"} />
                <CodeChangeAccessible path={"/CodeChangeAccessible"} />
                <FormHintAccessible path={"/FormHintAccessible"} />
                <Finish path={"/Finish"} />
              </Router>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
