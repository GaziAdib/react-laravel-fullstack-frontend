import React, { Component } from 'react';
import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            <h1 className="serviceName">WHO I AM ?</h1>
                            <hr/>
                            <p className="serviceDescription">I am software developer and Youtuber and helps people learn Code for Free and I provide amazing Gaming content as well!</p>

                            <h1 className="serviceName">My Mission</h1>
                            <hr/>
                            <p className="serviceDescription">I am software developer and Youtuber and helps people learn Code for Free and I provide amazing Gaming content as well!</p>


                            <h1 className="serviceName">My Vision</h1>
                            <hr/>
                            <p className="serviceDescription">I am software developer and Youtuber and helps people learn Code for Free and I provide amazing Gaming content as well!</p>

                        

                        </Col>  
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;