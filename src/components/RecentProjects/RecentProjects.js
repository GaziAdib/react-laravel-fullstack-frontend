import React, { Component } from 'react';
import { Fragment } from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Recent Projects</h1>
                    <Row>
                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://camo.envatousercontent.com/1a3debe1f936a5e2410c8a299027aa7cbb8a8ef0/68747470733a2f2f696d6167652e6962622e636f2f683745714d6b2f312e706e67" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDescription">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style"  to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://camo.envatousercontent.com/1a3debe1f936a5e2410c8a299027aa7cbb8a8ef0/68747470733a2f2f696d6167652e6962622e636f2f683745714d6b2f312e706e67" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDescription">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://camo.envatousercontent.com/1a3debe1f936a5e2410c8a299027aa7cbb8a8ef0/68747470733a2f2f696d6167652e6962622e636f2f683745714d6b2f312e706e67" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text  className="projectCardDescription">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style"  to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProjects;