import React from "react";
import "./About.scss";
import { FaFlag, FaCalendarCheck, FaHeartbeat } from "react-icons/fa";
import { ImTarget } from "react-icons/im";

function About() {
  return (
    <div className="about-container">
      <div className="header-container">About Us</div>
      <div className="row-wrapper">
        <div className="info-cell">
          <div className="title">
            <ImTarget className="icon-style"/>
            <div className="title-text">Goal</div>
          </div>
          <div className="info-wrapper">
            amet nostrud quis commodo do sunt aute nulla ad aute minim duis duis
            sit et culpa consectetur et enim mollit
            <br />
            amet nostrud quis commodo do sunt aute nulla ad aute minim duis duis
            sit et culpa consectetur et enim mollit
          </div>
        </div>
        <div className="info-cell">
          <div className="title">
            <FaCalendarCheck className="icon-style" />
            <div className="title-text">Plan</div>
          </div>
          <div className="info-wrapper">
            amet nostrud quis commodo do sunt aute nulla ad aute minim duis duis
            sit et culpa consectetur et enim mollit
            <br />
            amet nostrud quis commodo do sunt aute nulla ad aute minim duis duis
            sit et culpa consectetur et enim mollit
          </div>
        </div>
      </div>
			<div className="row-wrapper">
        <div className="info-cell">
          <div className="title">
            <FaFlag className="icon-style" />
            <div className="title-text">Vision</div>
          </div>
          <div className="info-wrapper">
            amet nostrud quis commodo do sunt aute nulla ad aute minim duis duis
            sit et culpa consectetur et enim mollit
            <br />
            amet nostrud quis commodo do sunt aute nulla ad aute minim duis duis
            sit et culpa consectetur et enim mollit
          </div>
        </div>
        <div className="info-cell">
          <div className="title">
            <FaHeartbeat className="icon-style" />
            <div className="title-text">Mission</div>
          </div>
          <div className="info-wrapper">
            amet nostrud quis commodo do sunt aute nulla ad aute minim duis duis
            sit et culpa consectetur et enim mollit
            <br />
            amet nostrud quis commodo do sunt aute nulla ad aute minim duis duis
            sit et culpa consectetur et enim mollit
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
