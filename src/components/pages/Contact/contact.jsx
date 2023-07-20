import { MdCall, MdOutlineEmail } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import ContactImg from "../../../assets/images/contact.jpg";
import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contacts" className="contact-wrapper">
      <div className="paddings innerWidth flexCenter contact-container">
        <div className="flexColCenter contact-left">
          <span className="orangeText">Contact Me</span>
          <span className="primaryText">Call, Text, or Email Me</span>
          <div className="flexCol contactModes">
            {/* First Row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}></BsFillChatDotsFill>
                  </div>
                  <div className="flexColStart detail">
                    <span>Chat</span>
                    <span>Chat with a representative</span>
                  </div>
                </div>
                <div className="flexCenter contactButton">Chat Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25}></MdCall>
                  </div>
                  <div className="flexColStart detail">
                    <span>Call</span>
                    <span>403-123-4567</span>
                  </div>
                </div>
                <div className="flexCenter contactButton">
                  <a href="tel:+15878395400" target="_blank">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
            {/* Second Row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter
                      size={25}
                    ></HiChatBubbleBottomCenter>
                  </div>
                  <div className="flexColStart detail">
                    <span>Text</span>
                    <span>403-123-4567</span>
                  </div>
                </div>
                <div className="flexCenter contactButton">
                  <a href="sms:+15878395400" target="_blank">
                    Text Now
                  </a>
                </div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdOutlineEmail size={25}></MdOutlineEmail>
                  </div>
                  <div className="flexColStart detail">
                    <span>Email</span>
                    <span>dieter.banaag19@gmail.com</span>
                  </div>
                </div>
                <div className="flexCenter contactButton">
                  <a href="mailto:dieter.banaag19@gmail.com" target="_blank">
                    Email Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexCenter contact-right">
          <div className="contact-right__imageContainer">
            <img src={ContactImg} alt="house" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
