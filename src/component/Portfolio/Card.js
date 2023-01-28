import React, { useState } from "react";
import ReactPlayer from "react-player";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className="box btn_shadow " onClick={toggleModal}>
        <div className="img">
          <img src={props.image} alt={props.image} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{props.category}</span>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              {props?.video === undefined ? (
                <img src={props.image} alt={props.image} />
              ) : (
                <ReactPlayer
                  className="react-player"
                  url={props?.video}
                  controls
                  playing={modal}
                  loop={modal}
                />
              )}
            </div>
            <div className="modal-text right">
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>{props?.description}</p>
              <p className="technologies">
                <b>Used Technologies: </b>
                {props?.technologies}
              </p>

              <div className="button f_flex mtop">
                <button
                  className="btn_shadow"
                  onClick={() => openInNewTab(props?.code)}
                >
                  SOURCE CODE
                </button>
                {props?.demo !== undefined && (
                  <button
                    className="btn_shadow"
                    onClick={() => openInNewTab(props?.demo)}
                  >
                    LIVE PREVIEW
                  </button>
                )}
              </div>
              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
