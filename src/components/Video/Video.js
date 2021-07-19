import React, { Component } from 'react';
import { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';

class Video extends Component {

    constructor(){
        super();
        this.state = {
            show:false
        }
    }

    modalClose = () => {
        this.setState({show:false});
    }

    modalOpen = () => {
        this.setState({show:true});
    }

    render() {
        return (
            <Fragment>
                <Container className="text-center">

                    <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard">
                            <div>
                                <p className="videoTitle">HOW I DO</p>
                                <p className="videoDes">I am a genios software developer at very good skill set and making apps like my own creation</p>
                                <p><FontAwesomeIcon onClick={this.modalOpen} className="playBtn" icon={faPlayCircle} /></p>
                            </div>
                        </Col>
                    </Row>

                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>

                    <Modal.Body>

                        <Player>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        <BigPlayButton position="center" />
                        </Player>

                    </Modal.Body>

                    <Modal.Footer>

                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                 </Modal>


            </Fragment>
        );
    }
}

export default Video;