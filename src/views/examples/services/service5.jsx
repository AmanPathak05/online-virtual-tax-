
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

class ITIN extends React.Component {
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
              <div class="row-grid justify-content-left row"><div class="text-left col-lg-12"><h3 class="display-3">ITIN</h3>
              
              <p class="lead">ITIN stands for Individual Taxpayer Identification Number, which is a number assigned by the IRS( Internal Revenue Service) for tax purposes to individuals who do not have, or are not eligible to have a SSN(Social Security Number) in the United States.
              </p>
              
              <p class="lead">An Individual Taxpayer Identification Number (ITIN) is a tax processing number issued by the Internal Revenue Service(IRS). IRS issues ITINs to individuals who are required to have a U.S. taxpayer identification number but who do not have, and are not eligible to obtain a Social Security Number (SSN) from the Social Security Administration (SSA).</p>
<h4>Who are required to have ITIN?</h4>
<ul><li>ITIN are used by individuals without Social Security Numbers for federal tax filing purposes with the IRS. An ITIN is a nine-digit number beginning with the number "9" and is formatted like a social security number, for example: 912-34-5678.</li>

<li>Individual Taxpayer Identification Numbers are not dependent on immigration status in the USA, because both resident and nonresident aliens in the United States may have federal tax reporting requirements by the IRS.</li>

<li>An ITIN is NOT the same as a SSN and does not give the same benefits. It is for U.S. Federal income tax filing purposes only.</li></ul>
              <h4>FORM OF ITIN</h4>
              <p class="lead">Form W-7 is the official IRS form required to be submitted in order to get issued an ITIN. To apply for an ITIN, you must complete Form W-7.
              </p>
              <b>All Form W-7 ITIN applications MUST be accompanied by the following documentation:</b>
              <ul>
                  <li>Original, valid U.S. Federal income tax return</li>
                  <li>The letter of denial from the SSA (if applicable)</li>
                  <li>Physical/Original documents OR copies of documents certified by the issuing agency* that show identifying information that matches the personal information provided on Form W-7, and shows your connection to a foreign country ("foreign status"). The documents must not be expired</li>
              </ul>
              <b>Identification documents accepted by the IRS are the following</b>
              <ul>
                  <li>Passport - the only document you can submit without any other of the documents</li>
                  <li>Additional documents accepted by the IRS - used in combination to prove your identity AND foreign status</li>
                  <li>United State Citizenship and Immigration Services photo identification</li>
                  <li>Visa issued by the US Department of State</li>
                  <li>Foreign military identification card</li>
                  <li>Foreign voter's registration card</li>
                  <li>United States driver's license</li>
                  <li>United States military identification card</li>
                  <li>Foreign driver's license</li>
                  <li>U.S. State identification card</li>
                  <li>National Identification card</li>
                  <li>Civil birth certificate</li>
                  <li>School records (for dependents under 14, and student under 18)</li>
                  <li>Passport - the only document you can submit without any otherdocuments Additional documents accepted by the IRS - used in combination to prove your identity AND foreign status</li>
              </ul>
              <b>Purpose of the W-7</b>
              <p>The IRS issues ITIN's to foreign nationals and others who have federal tax reporting or filing requirements and do not qualify for social security numbers ("SSNs"). A non-resident alien individual not eligible for a SSN who is required to file a U.S. tax return only to claim a refund of tax under the provisions of a U.S. tax treaty needs an ITIN.</p>
              <b>Who Must Apply</b>
              <p>
              Any Individual who is not eligible for a SSN but who must furnish a taxpayer identification number must apply for an ITIN at Create Application. Some examples include the following:
              </p>
              <ul>
                  <li>A nonresident alien required to file a U.S. tax return</li>
                  <li>A U.S. resident alien (based on days present in the United States) filing a U.S. tax return</li>
                  <li>A dependent or spouse of a U.S. citizen /resident alien</li>
                  <li>A nonresident alien student, professor or researcher who is required to file a U.S. tax return or is claiming an exemption to filing a return</li>
                  <li>A dependent or spouse of a nonresident alien visa holder</li>
              </ul>
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

export default ITIN;
