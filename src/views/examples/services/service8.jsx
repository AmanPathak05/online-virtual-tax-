
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

class EIN extends React.Component {
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
              <div class="row-grid justify-content-left row"><div class="text-left col-lg-12"><h3 class="display-3">EIN</h3>
              <h4>What is EIN?</h4>
              <p class="lead"> The Employer Identification Number (EIN), also known as the Federal Employer Identification Number (FEIN) or the Federal Tax Identification Number, is a unique nine-digit number ( for example, 12-3456789) assigned by the Internal Revenue Service (IRS) to business entities operating in the United States for the purposes of identification.</p>
              <p>review the application, IRS Form SS-4 and the Instructions for Form SS-
              </p>
              <b>Ways to apply for EIN</b>
              <h5>1. Apply Online</h5>
              <p>Use the online EIN application form, called the EIN Assistant.In this case, it's best to have the application completed and all the questions answered before you go online, because you will have to begin over if you have to stop to figure out the responses. The IRS says:</p>
              <ul>
                  <li>You must complete this application in one session, as you will not be able to save and return at a later time. For security purposes, your session will expire after 15 minutes of inactivity, and you will need to start over.</li>
                  <li>When you have completed the form, the information is validated and you can receive your EIN immediately. The online method is available for businesses located in the U.S. or its territories. You must have a valid taxpayer identification number before applying online.</li>
                  
              </ul>
              <h5>2. Apply by phone</h5>
              <p>Call the Business & Specialty Tax Line at (800) 829-4933.The hours of operation are 7:00 a.m. - 10:00 p.m. local time, Monday to Friday. Someone will take your information over the phone and assign you an EIN at the end of the conversation.</p>

                <b>Note: International applicants must call (215) 516-6999 (Not a toll-free number).</b>
                <h5>3. Apply by FAX</h5>
                <p>Fax the completed SS-4 application form to your state fax number. If you include your fax number, you will receive your EIN by fax within four business days.</p>
                <h5>4. Apply by email</h5>
                <p>Mail your completed SS-4 Form to the appropriate IRS office. You will receive your EIN by email within four weeks.</p>
                <p>
                As you can see, if you are comfortable applying online or by phone, you can receive your EIN immediately instead of waiting days or weeks.</p>
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

export default EIN;
