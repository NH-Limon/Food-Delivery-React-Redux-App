import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <div className="about_page">
      <Helmet title="About">
        <CommonSection title="About Page" />
        <section>
          <Container>
            <Row>
              <Col></Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default About;
