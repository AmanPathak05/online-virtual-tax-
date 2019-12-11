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
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
        <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
              <div class="card-lift--hover shadow border-0 card">
              <div class="py-5 card-body">
                <h3 className="text-primary font-weight-light mb-2">
                Are Tax Softwares Costing You More?
                </h3>
                <h4 className="mb-0 font-weight-light">
                Online Virtual Tax is the solution :
                </h4>
                <ul>
                  <li>
                  Provides an affordable tax filing with the best Intuit Proconnect tax software and get an extra bonus of having your tax reviewed and filed by us(Tax Preparer) with 24/7 hours support and assistance
                   guiding you in the right direction with our in-house tax experts as per relevant tax rules.
                  </li>
                  <li>
                  The dollar cost is an important consideration, but don't forget the value of 
                  your time. To complete the tax forms you need a lot of time and hours into account gathering records, tax planning and filling out and submitting the return which will consume a lot of time, but with a tax preparer, you'll have to commit less time to gather tax statements and other material. But once you deliver the necessary documents, you'll have more time for other tasks.
                  </li>
                  <li>
                  By signing your tax return, you are responsible for all the information on the 
                  forms. If you do your taxes yourself, that means you're the one the IRS will come to with any questions - possibly years after you've filed.But on the other hand tax preparer, can be your point person. By filling out a line on your 1040, you can direct the IRS to bring any questions about the filing to your tax preparer.
                  </li>
                  
                </ul>
                </div>
                </div>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
              <div class="card-lift--hover shadow border-0 card">
              <div class="py-5 card-body">
              <h3 className="text-primary font-weight-light mb-2">
              What Is Virtual Cloud Accounting ?
                </h3>
                <h4 className="mb-0 font-weight-light">
                Online Virtual Tax is the solution :
                </h4>
                <ul>
                  <li>
                  Provides an affordable tax filing with the best Intuit Proconnect tax software and get an extra bonus of having your tax reviewed and filed by us(Tax Preparer) with 24/7 hours support and assistance
                   guiding you in the right direction with our in-house tax experts as per relevant tax rules.
                  </li>
                  <li>
                  The dollar cost is an important consideration, but don't forget the value of 
                  your time. To complete the tax forms you need a lot of time and hours into account gathering records, tax planning and filling out and submitting the return which will consume a lot of time, but with a tax preparer, you'll have to commit less time to gather tax statements and other material. But once you deliver the necessary documents, you'll have more time for other tasks.
                  </li>
                  <li>
                  By signing your tax return, you are responsible for all the information on the 
                  forms. If you do your taxes yourself, that means you're the one the IRS will come to with any questions - possibly years after you've filed.But on the other hand tax preparer, can be your point person. By filling out a line on your 1040, you can direct the IRS to bring any questions about the filing to your tax preparer.
                  </li>
                  
                </ul>
                </div>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
