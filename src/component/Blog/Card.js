import React, { useState } from "react";
import { useHistory } from "react-router";

const Card = (props) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div className="box btn_shadow " onClick={() => openInNewTab(props.link)}>
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="category d_flex">
          <span>{props.date}</span>
          {/*<label>
            <i className='far fa-heart'></i> {props.date}
          </label>*/}
        </div>
        <div className="title">
          <h2>{props.title_one}</h2>

          <i className="fas fa-arrow-right arrow"></i>
        </div>
      </div>
    </>
  );
};

export default Card;
