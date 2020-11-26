import React from "react";
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
                Dexterity Lab: Reading
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div class="row">
        Reading that discusses the topic, how it affects people, how often it
        occurs, etc.
      </div>
    </div>
  );
};

export default Reading;
