import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection text-center">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">

                            <h1 className="serviceName">Follow Me!</h1>
                            <a className="socialLink" href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                            <a className="socialLink" href="#"><FontAwesomeIcon icon={faYoutube} /> YouTube</a>
                        
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                             <h1 className="serviceName">Address</h1>
                             <p className="serviceDescription">521, east jurain, dhaka-1204</p>
                             <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope} /> adib@gmail.com</p>
                             <p className="serviceDescription"><FontAwesomeIcon icon={faPhone} /> +8801910188033</p>
                        </Col>


                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">information</h1>
                            <Link className="footerLink" to="/about">About Me</Link><br/>
                            <Link className="footerLink" to="/contact">Contact Me</Link>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Legal</h1>
                            <Link className="footerLink" to='/Refund'>Refund Policy</Link><br/>
                            <Link className="footerLink" to="/Terms">Terms and Condition</Link><br/>
                            <Link className="footerLink" to="/Privacy">Privacy Policy</Link>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyRight">
                    <a className="copyRightLink" href="#">Adib.com &copy; 2019-2021</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;