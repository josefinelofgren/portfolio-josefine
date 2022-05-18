// import libaries 
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

//import components
import { Container, Navbar as Nav } from 'react-bootstrap';

function Navbar({ sidebar, toggleSidebar, windowDimensions }) {
  const { t } = useTranslation("translation", { keyPrefix: "navbar" });

  return (
      <Nav>
          <Container fluid>
              <Nav.Brand>
                  <Link to ="/">
                      {/* {t("navbar-brand")} */}
                  </Link>
              </Nav.Brand>
              {windowDimensions.width < 768 ? (
              <Link
                  to='#'
                  className={sidebar ? `sidebar-btn is-active` : `sidebar-btn`}
                  onClick={toggleSidebar}>
                  <div className={sidebar ? `sidebar-burger is-active`: `sidebar-burger`} />
              </Link>
              ) : (
                  <div className="nav-links">
                      <Link to="#">
                          Work
                      </Link>
                      <Link to="#">
                          About
                      </Link>
                      <Link to="#">
                          Contact
                      </Link>
                      <Link to="#">
                          <div className="nav-button">
                          Resume
                          </div>
                      </Link>
                  </div>
              )}
          </Container>
      </Nav>
  )
}

export default Navbar;
