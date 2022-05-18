// import libaries
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as Scroll from "react-scroll";

//import components
import { Container } from "react-bootstrap";

function Sidebar({ sidebar, toggleSidebar }) {
  const { t } = useTranslation("translation", { keyPrefix: "navbar" });
  let LinkScroll = Scroll.Link;

  return (
    <div className={sidebar ? "sidebar is-active" : "sidebar"}>
      <Container fluid>
        <div className={sidebar ? "sidebar-wrap is-active" : "sidebar-wrap"}>
          {sidebar && (
            <div className={sidebar ? "sidebar-links is-active" : "sidebar-links"}>
              <Link to="#">
                <li>{t("about")}</li>
              </Link>
              <LinkScroll onClick={() => toggleSidebar()} to="projects">
                <li>{t("portfolio")}</li>
              </LinkScroll>
              <LinkScroll onClick={() => toggleSidebar()} to="contact">
                <li>{t("contact")}</li>
              </LinkScroll>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Sidebar;
