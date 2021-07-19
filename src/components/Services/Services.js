import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import graphicsLogo from  '../../asset/image/graphics.svg';
import webLogo from  '../../asset/image/web.svg';
import mobileLogo from '../../asset/image/mobile.svg';

class Services extends Component {
    render() {
        return (
           <Fragment>
                <Container className="text-center">

                 <h1 className="serviceMainTitle">MY SERVICES</h1>

                    <Row>

                        <Col lg={4} md={6} sm={12}>

                            <div className="serviceCard text-center">
                                <img src={webLogo}/>
                                <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDescription">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>

                        </Col>


                        <Col lg={4} md={6} sm={12}>

                            <div className="serviceCard text-center">
                                <img src={mobileLogo}/>
                                <h2 className="serviceName">Mobile Development</h2>
                                <p className="serviceDescription">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>

                        </Col>


                        <Col lg={4} md={6} sm={12}>

                            <div className="serviceCard text-center">
                                <img src={graphicsLogo}/>
                                <h2 className="serviceName">Graphics Design</h2>
                                <p className="serviceDescription">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>

                        </Col>
                    </Row>
                </Container>
           </Fragment>
        )
    }
}

export default Services;
