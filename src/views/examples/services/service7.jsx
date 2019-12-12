
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

class Bookkeeping extends React.Component {
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
              <div class="row-grid justify-content-left row"><div class="text-center col-lg-12"><h3 class="display-3">Features of Bookkeeping Service</h3>
              <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-left" lg="12">
                <button type="button" class="btn btn-default">BANK RECONCILIATIONS</button>
                <div class="shadow card">
                    <div className="card-body">
                <p class="description">
                Do you hate keeping bank and credit card records? We can enter all transactions from your bank and credit card statements. We can also reconcile bank, credit-card and merchant-service accounts for you. This will ensure that your QuickBooks balances match your actual bank balances.You just email and/or fax the statements to us. We will enter & reconcile the information into QuickBooks and send you all the reports you need. We can reconcile the accounts as often as you need - on a daily basis, weekly basis or monthly basis. 
                </p></div></div>
                
              
              </Col>
            </Row>
          </Container>
          <Container>
          <div class="mb-3"></div>
            <Row className="row-grid justify-content-center">
              <Col className="text-left" lg="12">
                
                <button type="button" class="btn btn-default">ACCOUNTS PAYABLE</button>
                <div class="shadow card">
                    <div className="card-body">
                <p class="description">
                How do you keep track of bills you receive from vendors? Who pays them? When do you pay them? We can enter all the bills you receive from vendors into QuickBooks. We can also receive bills directly from vendors via email or fax, or login into vendor websites and download the bills. On a weekly basis, we will send you a report of all vendor bills that have to be paid. This report will list all outstanding vendor bills, amounts due, dates due and how long they have been outstanding. If you do write a check or make a credit card payment to a vendor, we will be able to see those payments from your bank and/or credit card websites. We can easily make the appropriate entries against the appropriate vendor bill without your involvement.
                </p></div></div>
                
              
              </Col>
            </Row>
          </Container>
          <Container>
          <div class="mb-3"></div>
            <Row className="row-grid justify-content-center">
              <Col className="text-left" lg="12">
                
                <button type="button" class="btn btn-default">ACCOUNTS RECEIVABLE</button>
                <div class="shadow card">
                    <div className="card-body">
                <p class="description">
                You did some work for a client or you sold a product to a customer. The customer now owes you money. How do you keep track of this to ensure you collect the money owed to you? We keep track of all the work you do for a client and/or all the products you sell to your customers right within QuickBooks. We can enter time directly into QuickBooks and create invoices for customers. We can keep track of products you sold and create appropriate invoices. We can email and/or fax these invoices to customers to let them know they owe you money. We can later follow-up with customers via email and/or fax to remind them, and collect on the outstanding balances. We will also send you a weekly report of all outstanding customer invoices, how much each customer owes you, how long they have been open, etc. so that you can follow up directly with your customers. Last but not the least when you receive a payment from a customer and that payment shows up in your back account, we can ensure the appropriate customer invoice is credited for the payment.
                </p></div></div>
                
              
              </Col>
            </Row>
          </Container>
          <Container>
          <div class="mb-3"></div>
            <Row className="row-grid justify-content-center">
              <Col className="text-left" lg="12">
                
                <button type="button" class="btn btn-default">SALES TAX FILINGS AND PAYMENTS</button>
                <div class="shadow card">
                    <div className="card-body">
                <p class="description">
                Many states have requirements to file and pay sales taxes on a periodic basis. Since we keep track of all your invoices within QuickBooks, we can easily calculate the sales tax liabilities. We can use this information to file and pay sales taxes on a periodic basis with the appropriate sales tax agencies.
                </p></div></div>
                
              
              </Col>
            </Row>
          </Container>
          <Container>
          <div class="mb-3"></div>
            <Row className="row-grid justify-content-center">
              <Col className="text-left" lg="12">
                
                <button type="button" class="btn btn-default">PAYROLL SERVICES</button>
                <div class="shadow card">
                    <div className="card-body">
                <p class="description">
                How would your employees feel if they were not paid on time? We can manage payroll using QuickBooks and/or an external third party provider like ADP. We collect time-sheets from Employees via email, fax or the web. We will enter their time into QuickBooks. We will create paychecks using the time-sheets and send them to you for approval. Once you approve, we will process the paychecks by creating checks and/or direct deposits. We will email paystubs to employees. We will also deposit the payroll taxes to the appropriate state and federal agencies.
                </p></div></div>
                
              
              </Col>
            </Row>
          </Container>
          <Container>
          <div class="mb-3"></div>
            <Row className="row-grid justify-content-center">
              <Col className="text-left" lg="12">
                
                <button type="button" class="btn btn-default">BOOKKEEPING REPORTS</button>
                <div class="shadow card">
                    <div className="card-body">
                <p class="description">
                You have entered and reconciled all the data in QuickBooks. So, how about reporting? What kinds of bookkeeping reports can I get? QuickBooks allow you to generate detailed reports in Excel or PDF format. Such reports may include profit and loss, balance sheet, bank reconciliations, customer aging, unpaid vendor bills, etc. We can also work with you to generate various custom reports you may need. We can send you these reports as often as you need them - on a monthly, weekly or daily basis.
                </p></div></div>
                
              
              </Col>
            </Row>
          </Container>
          <Container>
          <div class="mb-3"></div>
            <Row className="row-grid justify-content-center">
              <Col className="text-left" lg="12">
                <div class="shadow card">
                    <div className="card-body">
                <b>GET OUR FREE CASH FLOW TOOL : CRM @ Just $50</b>
                <div class="mb-3"></div>
                <b>Connect with Us Directly for Bookkeeping Service either via Physical location at Cupertion office or through an online meeting
                </b>
                <p>
                Office Location For Bookkeeping ServiceOnline Virtual Tax is an Accounting firm provides Bookkeeping Service In Cupertino where you can drop at our officeConnect with us via online meeting for bookkeeping service Having no time to travel ? Online Virtual Tax offers you with online meeting to do your bookkeeping without having to visit us at our office location for bookkeeping service saving your travelling time and cost
                </p></div></div>
                
              
              </Col>
            </Row>
          </Container>

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

export default Bookkeeping;
