
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
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

class BusinessTaxPreparation extends React.Component {
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
                <h4>Tax Services</h4>
                <nav class="navbar-dark bg-primary navbar navbar-expand-lg">
	<div class="container">
		<a href="#pablo" class="navbar-brand">Individual Tax Preparation</a>
		<button class="navbar-toggler" id="navbar-primary">
			<span class="navbar-toggler-icon"></span>
		</button>
	</div>
</nav>
<nav class="navbar-dark bg-primary mt-4 navbar navbar-expand-lg">
	<div class="container">
		<a href="#pablo" class="navbar-brand">Business Tax Preparation</a>
		<button class="navbar-toggler" id="navbar-primary">
			<span class="navbar-toggler-icon"></span>
		</button>
	</div>
</nav>
<nav class="navbar-dark bg-primary mt-4 navbar navbar-expand-lg">
	<div class="container">
		<a href="#pablo" class="navbar-brand">Tax Residency Certificate</a>
		<button class="navbar-toggler" id="navbar-primary">
			<span class="navbar-toggler-icon"></span>
		</button>
	</div>
</nav>
<nav class="navbar-dark bg-primary mt-4 navbar navbar-expand-lg">
	<div class="container">
		<a href="#pablo" class="navbar-brand">FBAR Fipng</a>
		<button class="navbar-toggler" id="navbar-primary">
			<span class="navbar-toggler-icon"></span>
		</button>
	</div>
</nav>
<nav class="navbar-dark bg-primary mt-4 navbar navbar-expand-lg">
	<div class="container">
		<a href="#pablo" class="navbar-brand">ITIN</a>
		<button class="navbar-toggler" id="navbar-primary">
			<span class="navbar-toggler-icon"></span>
		</button>
	</div>
</nav>
<nav class="navbar-dark bg-primary mt-4 navbar navbar-expand-lg">
	<div class="container">
		<a href="#pablo" class="navbar-brand">Payroll</a>
		<button class="navbar-toggler" id="navbar-primary">
			<span class="navbar-toggler-icon"></span>
		</button>
	</div>
</nav>
<nav class="navbar-dark bg-primary mt-4 navbar navbar-expand-lg">
	<div class="container">
		<a href="#pablo" class="navbar-brand">Bookkeeping</a>
		<button class="navbar-toggler" id="navbar-primary">
			<span class="navbar-toggler-icon"></span>
		</button>
	</div>
</nav>
<nav class="navbar-dark bg-primary mt-4 navbar navbar-expand-lg">
	<div class="container">
		<a href="#pablo" class="navbar-brand">EIN</a>
		<button class="navbar-toggler" id="navbar-primary">
			<span class="navbar-toggler-icon"></span>
		</button>
	</div>
</nav>

              </Col>
                  <Col lg="8">
              <div class="row-grid justify-content-left row"><div class="text-center col-lg-12"><h3 class="display-3">Business Tax Preparation Services</h3>
              <p class="lead">At Online Virtual Tax, we believe in providing a professional, convenient and simple tax service solutions. With virtual tax preparation, our clients can get their tax filed with no stress and anxiety. Online virtual tax preparation service helps clients to get their tax documents prepared simply by uploading all the relevant documents through a secure upload portal.
              We provide tax preparation service for all types of Small and large business either by online having the virtual presence or physical meetings.While we offer fixed pricing, our fees are based on the overall complexity of the return.Our Business Tax preparation is done with the help of Satya Narayan, MBA, CPA has 15 years of experience in public accounting and corporate finance. He has also worked as CFO at Silicon Valley start-up high tech companies Garuda Networks and CM Innovation, and was also the Corporate Controller at EnjoyWeb and serving start-ups and companies whose annual revenues exceed $10 million.
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

export default BusinessTaxPreparation;
