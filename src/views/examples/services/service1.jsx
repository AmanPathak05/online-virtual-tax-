
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

class IndividualTaxPreparation extends React.Component {
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
              <div class="row-grid justify-content-left row"><div class="text-center col-lg-12"><h3 class="display-3">Individual Tax Preparation Services </h3><h4>E-File your 2017 Individual Tax return by APR-17-2018 Just @$99!</h4><p class="lead">At Online Virtual Tax, we believe in providing a professional, convenient and simple Individual Tax Preparation Service solutions governed by IRS Rules. With virtual tax preparation, our clients can get their tax filed with no stress and anxiety.

Preparing your own income tax return can be a task that leaves you with more questions than answers.Filing Individual Income Tax for Federal and State taxes can be made easy with us just with a click either by scheduling an online appointment with us or by visiting our tax preparation office at Cupertino. Online Virtual Tax also helps you with Individual Tax Preparation Document checklist required to E-file the individual taxes for State and Federal Tax filing.</p></div></div>

</Col>
                <Col lg="12">
                {/* <section class="section bg-secondary">*/}
            <Container className="py-lg-md d-flex">
              <Row className="content"> 
            <div class="row-grid justify-content-center row"><div class="text-left col-lg-12"><h2 class="display-3">We provide the following features as part of our tax services: </h2>
              <p>
                  <ul>
                    <li>Clients can upload their documents through some of the most secure document exchange methods such as Dropbox, Drive or any method that is most convenient for the client</li>
                    <li>We allow the clients to choose their mode of exchange of documents</li>
                    <li>Clients will receive their own login credentials, such as username and password through which they can monitor the status of their tax filing</li>
                    <li>After registration, clients can accept the Terms and conditions offered by the website, Privacy Policy, Consent forms and other legal obligations</li>
                    <li>Once the client decides to avail our services, and upon successful registration, our firm can carry forward from there</li>
                    <li>We use the services of trusted CPA Professionals for filing taxes</li>
                    <li>All our tax filing are done within a fixed period of time</li>
                    <li>We will provide all proof of tax filing through our portal</li>
                    <li>Clients can pay only after the process is completed. There are no hidden charges and the payment is only one time which is accepted through common modes such as Paypal and secured credit card payment portals</li>
                    <li>Through Online Virtual Tax we believe in providing a simple, hassle-free, secure tax filing solution to our clients so that they can get away with all the complications associated with filing taxes.</li>
                    {/* <li></li> */}
                  </ul>
              </p>
            </div>
        </div>
 </Row>
</Container>{/*
</section> */}
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

export default IndividualTaxPreparation;
