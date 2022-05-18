// import libaries
import React from "react";
import { useTranslation } from "react-i18next";

//import components
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../heading/heading";
import { setHighlightedText } from "../../utils/setHighlightedText";

function Header() {
  const { t } = useTranslation("translation", { keyPrefix: "header" });

  return (
    <header className="header">
      <Container fluid>
        <div className="header-container">
          <div className="header-content">
            <Heading element="h6" text={t("preamble")} />
            <Heading
              element="h1"
              text={setHighlightedText(`${t("title")}`, `${t("highlight")}`)}
            />
            <Heading element="h5" text={t("subtitle")} />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
