// import libaries
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import { useTranslation } from "react-i18next";

//import components
import { Container, Row, Col } from "react-bootstrap";
import { setUnderlinedText } from '../../utils/setUnderlinedText'
import Heading from "../heading/heading";


function Footer() {
  const { t } = useTranslation("translation", { keyPrefix: "footer" });

  const contactDetails = [
    {
      icon: <FaIcons.FaLinkedinIn />,
      text: "LinkedIn",
      src: "https://www.linkedin.com/in/josefinelofgren/",
    },
    {
      icon: <MdIcons.MdPhoneIphone />,
      text: "+46 76 79 88 105",
      src: "tel:+46767988105",
    },
    // {
    //   icon: <SiIcons.SiMaildotru />,
    //   text: "hello@josefinelofgren.com",
    //   src: "mailto:hello@josefinelofgren.com",
    // },
  ];
  return (
    <div className="footer">
      <Container fluid>
        <div className="footer-container">
          <div className="footer-content">
        <Row>
        <Heading element="h1" text={setUnderlinedText(`${t("title")}`, `${t("underline")}`, `mailto: hello@josefinelofgren.com`)} />
          {contactDetails.map((item, index) => {
            return (
                <a className="contact-info" target="_blank" href={item.src} rel="noreferrer">
                      {item.text}
                </a>
            );
          })}
        </Row>
        </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
