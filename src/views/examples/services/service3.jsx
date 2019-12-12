
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import Sidebar from "components/Navbars/sidebar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

class TaxResidencyCertificate extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <section class="section bg-secondary">
            <Container className="py-lg-md d-flex">
              <Row className="justify-content-center">
              <Col lg="4"> 
              <Sidebar /> 
              </Col>
                  <Col lg="8">
              <div class="row-grid justify-content-left row"><div class="text-center col-lg-12"><h3 class="display-3">Tax Residency Certificate</h3>
              <p class="lead">Tax Residency Certificate (TRC) is the certificate mandatory to claim benefit under tax treaty. Many U.S. treaty partners require the IRS to certify that the person claiming treaty benefits is a resident of the United States for federal tax purposes. The IRS provides this residency certification on Form 6166, a letter of U.S. residency certification.

Form 6166 is a computer-generated letter printed on stationary bearing the U.S. Department of Treasury letterhead certifying that the individuals or entities listed are residents of the United States for purposes of the income tax laws of the United States. In order to obtain this certificate, you must fill up Form 8802, Application for United States Residency Certificate.
              </p></div></div>

</Col>
                </Row>
                </Container>
                </section>
                <Container>
                <div class="row-grid mt-5 row">
                <div class="col-lg-2"></div>
                    <div class="col-lg-5"><div class="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary"><i class="ni ni-settings text-primary"></i></div><h5 class="text-white mt-3">Get Connected With Us For Reliable Tax Services</h5><p class="text-white mt-3">Address: 21064 RED FIR COURT, CUPERTINO - 95014
Call us : +1 4087999329
Mail us : devasish2000@gmail.com</p></div><div class="col-lg-5"><div class="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary"><i class="ni ni-ruler-pencil text-primary"></i></div><h5 class="text-white mt-3">Grow your market</h5><p class="text-white mt-3">Have your taxes prepared and filed without having to visit an office by scheduling an appointment with us and we will help you file taxes from anywhere</p></div></div>
                </Container>


          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default TaxResidencyCertificate;
