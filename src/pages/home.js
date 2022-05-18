// import libaries 
import React, { useLayoutEffect, useEffect } from 'react';

//import components
import Header from "../components/header/header";
import Card from "../components/card/card";
import { Container, Row, Col } from "react-bootstrap";

// import data
import { ProjectData } from "../data/project-data";

function Home() {

  return (
    <div className="home">
        <Header />
        <div className="projects">
            <Container fluid>
            <Row>
                {ProjectData.map((item, index) => {
                    return (
                        <Col md="6">
                            <Card 
                              title={item.title}
                              preamble={item.preamble}
                              button={item.button}
                              image={item.imgSrc} 
                              labels={item.labels}
                              bgColor={item.bgColor}/> 
                        </Col>
                    )
                })}

            </Row>
            </Container>
        </div>
    </div>
  );
}

export default Home;