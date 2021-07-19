import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class TermsDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            
                            <p>
                                 You can use this agreement anywhere, regardless of what platform your business operates on:

                                Websites
                                WordPress blogs or blogs on any kind of platform: Joomla!, Drupal etc.
                                E-commerce shops
                                Mobile apps: iOS, Android or Windows phone
                                Facebook apps
                                Desktop apps
                                SaaS apps
                            </p>
                        

                        </Col>  
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default TermsDescription;