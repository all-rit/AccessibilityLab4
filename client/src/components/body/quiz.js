import React from "react";
import Quiz from "./../../quiz/App"
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";

const Reading = ({ title, description, links }) => {
  if (links === undefined) {
    links = [null, null, null];
  }

  return (
    <div class="container">
      <section class="page-section" style={{ paddingBottom: "25px" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <br />
              <br />
              <h2 class="section-heading text-uppercase">
                Dexterity Lab: Quiz
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* <div class="row">
        Quiz questions that come from concepts throughout each part of the lab.
      </div> */}
      <Quiz />
    </div>
  );
};

export default Reading;
