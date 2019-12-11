
import React from "react";

// reactstrap components
import {
 
  Container,
  Row,
  Col
} from "reactstrap";

// core components

class Sidebar extends React.Component {
  componentDidMount() {
    // document.documentElement.scrollTop = 0;
    // document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        
       
            {/* <section class="section bg-secondary"> */}
            
              {/* <Col lg="4"> */}
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

              {/* </Col> */}
               
                {/* </section> */}
         
      </>
    );
  }
}

export default Sidebar;
