import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class RefundSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            
                            <ul>
                                <li>First 30 Days Money Back</li>

                                <li>This is not a buy and try product</li>

                                <li>You have 30 (change this) calendar days to return an item from the date you received it.
                                    To be eligible for a return, your item must be unused and in the same condition that you received it.
                                    Your item must be in the original packaging.
                                    Your item needs to have the receipt or proof of purchase.
                                </li>
                                
                                <li>You have 30 (change this) calendar days to return an item from the date you received it.
                                    To be eligible for a return, your item must be unused and in the same condition that you received it.
                                    Your item must be in the original packaging.
                                    Your item needs to have the receipt or proof of purchase.
                                </li>
                            </ul>


                        </Col>  
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RefundSection;