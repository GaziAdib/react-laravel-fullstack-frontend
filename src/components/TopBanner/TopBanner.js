import React, { Component, Fragment  } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">Software Engineering</h1>
                                    <h4 className="topSubTitle">Mobile & Web Application</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}


export default TopBanner;