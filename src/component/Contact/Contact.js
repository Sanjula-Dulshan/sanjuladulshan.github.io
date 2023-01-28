import React, { useRef, useState } from "react";
import contact1 from "./contact1.png";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const YOUR_SERVICE_ID = "service_2dwdtj4";
const YOUR_TEMPLATE_ID = "template_u7q476q";
const YOUR_PUBLIC_KEY = "8vQ8CHUlaggKO31qw";

const Contact = () => {
  const form = useRef();
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const formSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          data.fullname = "";
          data.phone = "";
          data.email = "";
          data.subject = "";
          data.message = "";
          alert("Message Sent, We will contact you soon ");
        },
        (error) => {
          console.log(error);
          alert("Message Not Sent, Please Try another way ");
        }
      );
  };

  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <h1>I.G. Sanjula Dulshan</h1>
                  <p>Phone: +94719647830</p>
                  <p>Email: sdulshan10@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <button
                      className="btn_shadow"
                      onClick={() =>
                        openInNewTab(
                          "https://www.linkedin.com/in/sanjula-dulshan-154329203/"
                        )
                      }
                    >
                      <i className="fab fa-linkedin"></i>
                    </button>

                    <button
                      className="btn_shadow"
                      onClick={() =>
                        openInNewTab("https://github.com/Sanjula-Dulshan/")
                      }
                    >
                      <i className="fab fa-github"></i>
                    </button>

                    <button
                      className="btn_shadow"
                      onClick={() => openInNewTab("https://wa.link/nn27jj")}
                    >
                      <i className="fab fa-whatsapp"></i>
                    </button>

                    <button
                      className="btn_shadow"
                      onClick={() =>
                        openInNewTab(
                          "https://www.facebook.com/sanjula.dulshan.37"
                        )
                      }
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form ref={form} onSubmit={formSubmit}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="fullname"
                      required
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER </span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      onChange={InputEvent}
                    />
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL </span>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>SUBJECT </span>
                  <input
                    type="text"
                    name="subject"
                    required
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE </span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    required
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <button className="btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
