import React from "react";
import "./Home.css";
import hero from "../pic/hero.png";

import skillJs from "../pic/js.png";
import skillJava from "../pic/java.png";
import skillMySql from "../pic/mySql.png";
import skillMongoDb from "../pic/mongoDb.png";
import skillExpress from "../pic/express.png";
import skillReact from "../pic/react.png";
import skillNode from "../pic/node.png";
import skillAWS from "../pic/aws.png";
import skillGitHub from "../pic/github.png";
import skillFirebase from "../pic/firebase.png";
import skillCLang from "../pic/c.png";
import skillAngular from "../pic/angular.png";

import { Typewriter } from "react-simple-typewriter";
import { Tooltip } from "react-tooltip";

const Home = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Sanjula Dulshan</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[" Professional Coder.", " Developer."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I am a 4th year undergraduate student at SLIIT, studying Bsc(Hons)
              in Information Technology with a specialization in Software
              Engineering. I have gained hands-on experience through a six-month
              internship and currently working as an Apprentice Software
              Engineer at eBuilder Technology Center Pvt Ltd, where I specialize
              in AWS, ReactJS, and Node JS. I am a self-motivated individual
              with a passion for technology and a desire to continuously learn.
              I am looking for an opportunity to enhance and augment my
              knowledge and skill base while continuing my studies.
              {/* ................................................................. */}
              {/* I am a 4th-year undergraduate student at SLIIT. I have hands-on
              experience as an Apprentice Software Engineer at eBuilder
              Technology Center Pvt Ltd, specializing in AWS, ReactJS, and Node
              JS. I am a self-motivated individual with a passion for technology
              and a desire to continuously learn and grow in software
              development. I am looking for an opportunity to enhance and
              augment my knowledge and skill base while continuing my studies. */}
              {/* I am 4th year undergraduate student at SLIIT, studying Bsc (Hons)
              Information Technology with a specialization in Software
              Engineering. With a passion for technology and a drive to always
              learn and improve, I have a strong foundation in software
              development and am constantly seeking new challenges and
              opportunities. During my studies, I had the opportunity to gain
              real-world experience through a six-month internship at eBuilder
              Technology Center Pvt Ltd, where I worked as an Apprentice
              Software Engineer. In this role, I honed my skills in AWS,
              ReactJS, and Node JS, working as a full-stack developer on various
              projects. Currently, I continue to work at eBuilder Technology
              Center Pvt Ltd as an Apprentice Software Engineer, where I am able
              to apply my skills and knowledge to real-world projects, and help
              build innovative and efficient software solutions for our clients.
              I am a self-motivated individual who is always eager to learn and
              grow, and I look forward to continuing my journey in the tech
              industry. Thank you for visiting my portfolio, and I hope you
              enjoy exploring my work and accomplishments. */}
            </p>
            <button
              className="cv-btn"
              onClick={() =>
                openInNewTab(
                  "https://drive.google.com/file/d/1Ge-6KQNxc9Aciv7XeDbh2HzsP7zgnBdx/view?usp=sharing"
                )
              }
            >
              DOWNLOAD RESUME
            </button>

            <div className="hero_btn d_flex">
              {/* <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <a
                    href="https://www.facebook.com/sanjula.dulshan.37"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn_shadow">
                      <i class="fab fa-facebook-f"></i>
                    </button>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sanjula-dulshan-154329203/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn_shadow">
                      <i class="fab fa-linkedin-in"></i>
                    </button>
                  </a>
                </div>
              </div> */}
              <div className="col_1">
                <div className="heading" style={{ marginBottom: "0px" }}>
                  <h4>BEST SKILL ON</h4>
                </div>
                <div className="button">
                  <button className="btn_shadow" id="reactJs">
                    <img src={skillReact} alt="React js" />
                  </button>
                  <button className="btn_shadow" id="angular">
                    <img src={skillAngular} alt="Angular" />
                  </button>
                  <button className="btn_shadow" id="expressJs">
                    <img src={skillExpress} alt="Express js" />
                  </button>

                  <button className="btn_shadow" id="nodeJs">
                    <img src={skillNode} alt="Node js" />
                  </button>
                  <button className="btn_shadow" id="js">
                    <img src={skillJs} alt="Java Script" />
                  </button>
                  <button className="btn_shadow" id="java">
                    <img src={skillJava} alt="Java" />
                  </button>
                  <button className="btn_shadow" id="c">
                    <img src={skillCLang} alt="C Language" />
                  </button>
                  <button className="btn_shadow" id="mySql">
                    <img src={skillMySql} alt="My SQL" />
                  </button>
                  <button className="btn_shadow" id="mongoDb">
                    <img src={skillMongoDb} alt="MongoDb" />
                  </button>
                  <button className="btn_shadow" id="firebase">
                    <img src={skillFirebase} alt="Firebase" />
                  </button>

                  <button className="btn_shadow" id="aws">
                    <img src={skillAWS} alt="AWS" />
                  </button>
                  <button className="btn_shadow" id="github">
                    <img src={skillGitHub} alt="Github" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="My profile" />
            </div>
          </div>
        </div>
      </section>
      <Tooltip anchorId="mongoDb" place="bottom" content="Mongo DB" />
      <Tooltip anchorId="expressJs" place="bottom" content="Express JS" />
      <Tooltip anchorId="reactJs" place="bottom" content="React JS" />
      <Tooltip anchorId="nodeJs" place="bottom" content="Node JS" />
      <Tooltip anchorId="js" place="bottom" content="Javascript" />
      <Tooltip anchorId="java" place="bottom" content="Java" />
      <Tooltip anchorId="mySql" place="bottom" content="My SQL" />
      <Tooltip anchorId="aws" place="bottom" content="AWS" />
      <Tooltip anchorId="github" place="bottom" content="Github" />
      <Tooltip anchorId="firebase" place="bottom" content="Firebase" />
      <Tooltip anchorId="c" place="bottom" content="C++ language" />
      <Tooltip anchorId="angular" place="bottom" content="Angular" />
    </>
  );
};

export default Home;
