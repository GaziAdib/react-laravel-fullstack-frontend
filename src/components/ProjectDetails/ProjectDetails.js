import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img src="https://camo.envatousercontent.com/1a3debe1f936a5e2410c8a299027aa7cbb8a8ef0/68747470733a2f2f696d6167652e6962622e636f2f683745714d6b2f312e706e67"/>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Foll Bazar</h2>

                            <p className="serviceDescription">Complate Food Management Project Android Based</p>

                            <ul>
                                <li className="serviceDescription">Unlimited Category</li>
                                <li className="serviceDescription">Admin Panel</li>
                                <li className="serviceDescription">Modern Design UI</li>
                                <li className="serviceDescription">Very Easy to Use</li>
                                <li className="serviceDescription">Excellent performance</li>
                                
                            </ul>
                            <Button variant="primary">Live</Button>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ProjectDetails;