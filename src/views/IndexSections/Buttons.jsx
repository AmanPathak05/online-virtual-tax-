/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components

import { Container, Row, Col, CardBody, Card } from "reactstrap";
class BasicElements extends React.Component {
  render() {
    return (
      <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                          Cloud Sharing
                          </h6>
                          <p className="description mt-3">
                          Emailing confidential information is a bad idea. We use a better option in the form of a cloud filesharing system vai highly secured Intuit Proconnect software with our clients that keeps their personal information from being hi-jacked from an email or being lost in the actual mail.
                          </p>
                          
                         
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                          Fax
                          </h6>
                          <p className="description mt-3">
                          With a fax machine, you can quickly send documents providing senders with a receipt after the document has finished moving through the fax process, the user has some evidence that he did, in fact, send the document he claims to have.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                          Our Website
                          </h6>
                          <p className="description mt-3">
                          You can also upload the documents through our website since Your information is safe and secure with 256 bit SSL encryption
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
    );
  }
}

export default BasicElements;
