import React, { Component } from 'react';
import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Our Courses</h1>
                    <Row>


                        <Col lg={6} md={12} sm={12} className="p-2">

                                <Row>

                                    <Col lg={6} md={6} sm={12}>
                                        <img className="courseImg" src="https://www.witnovus.com/wp-content/uploads/2019/12/top-screen-1-1.png"/>
                                    </Col>

                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="courseTitle text-justify">Web Development</h5>
                                        <p className="courseDescription text-justify">I build Responsive web apps for clients and for my personal projects.</p>
                                        <Link className="courseDetails float-left" to="/CourseDetails">Details</Link>
                                    </Col>

                                </Row>

                        </Col>




                        <Col lg={6} md={12} sm={12} className="p-2">

                                <Row>

                                    <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src="https://www.witnovus.com/wp-content/uploads/2019/12/top-screen-1-1.png"/>
                                    </Col>

                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="courseTitle text-justify">Web Development</h5>
                                        <p className="courseDescription text-justify">I build Responsive web apps for clients and for my personal projects.</p>
                                        <Link className="courseDetails float-left" to="/CourseDetails">Details</Link>
                                    </Col>

                                </Row>

                        </Col>



                        <Col lg={6} md={12} sm={12} className="p-2">

                            <Row>

                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src="https://www.witnovus.com/wp-content/uploads/2019/12/top-screen-1-1.png"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle text-justify">Web Development</h5>
                                    <p className="courseDescription text-justify">I build Responsive web apps for clients and for my personal projects.</p>
                                    <Link className="courseDetails float-left" to="/CourseDetails">Details</Link>
                                </Col>

                            </Row>

                        </Col>



                        <Col lg={6} md={12} sm={12} className="p-2">

                            <Row>

                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src="https://www.witnovus.com/wp-content/uploads/2019/12/top-screen-1-1.png"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle text-justify">Web Development</h5>
                                    <p className="courseDescription text-justify">I build Responsive web apps for clients and for my personal projects.</p>
                                    <Link className="courseDetails float-left" to="/CourseDetails">Details</Link>
                                </Col>

                            </Row>

                        </Col>



                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;