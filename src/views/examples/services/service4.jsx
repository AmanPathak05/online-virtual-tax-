
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

class FBARFipng extends React.Component {
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
              <div class="row-grid justify-content-left row"><div class="text-left col-lg-12"><h3 class="display-3">FBAR Filling</h3>
              <h4>What is FBAR ?</h4>
              <p class="lead">FBAR stands for "Foreign Bank Account Report", and refers to FinCen Form 114, Report of Foreign Bank and Financial Accounts.
              </p>
              <h4>Who Should File an FBAR?</h4>
              <p class="lead"><b>You're probably required to file an FBAR if you're:</b></p>

<ul><li>A U.S. citizen or green card holder living abroad.</li>

<li>Using foreign accounts for everyday activities.</li>

<li>You own or control foreign bank and financial accounts with a combined value over $10,000.</li></ul>
              <h4>FBAR Filing Deadline:</h4>
              <p class="lead">You file your FBAR separately from your tax return. Starting in 2017, the deadline for the FBAR has been moved up to April 18 to coincide with Tax Day, but an automatic six-month extension to October 16th is available if your FBAR is filed after April 18th.
              </p>
              </div></div>

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

export default FBARFipng;
