import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Fragment } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>

                        <Col lg={6} md={6} sm={12}>
                        <h1 className="serviceName">Quick Connect!</h1>

                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label className="serviceDescription">Name</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="serviceDescription">Email Address</Form.Label>
                                <Form.Control type="email"/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="serviceDescription">Message</Form.Label>
                                <Form.Control as="textarea" rows="3"/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>



                        </Col>


                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Discuss Now!</h1>
                            <p className="serviceDescription">521, east jurain, dhaka-1204</p>
                             <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope} /> adib@gmail.com</p>
                             <p className="serviceDescription"><FontAwesomeIcon icon={faPhone} /> +8801910188033</p>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;