import React, { Component } from 'react';
import { Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';

class ClientReview extends Component {
    render() {
        var settings = {
            autoplaySpeed:3000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

        return (
            <Fragment>
                <Container className="text-center">
                <h1 className="serviceMainTitle">Client Says</h1>
                    
                 <Slider {...settings}>
                    <div>
                        <Row className="text-center justify-content-center">
                            <Col lg={6} md={6} sm={12}>
                                <img className="circleImg" src="https://media.istockphoto.com/photos/female-student-lost-in-thoughts-picture-id947115508?k=6&m=947115508&s=612x612&w=0&h=zn7eIHul9mkr_7QeNCcwocxMtV6WxieA_2F3VIzauBY=" />
                                <h1 className="serviceName">Web Development</h1>
                                <p className="serviceDescription">What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer</p>
                            </Col>
                        </Row>
                    </div>

                    <div>
                        <Row className="text-center justify-content-center">
                            <Col lg={6} md={6} sm={12}>
                                <img className="circleImg" src="https://w.wallha.com/ws/5/fQc3Dyem.jpg" />
                                <h1 className="serviceName">Web Development</h1>
                                <p className="serviceDescription">What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer</p>
                            </Col>
                        </Row>
                    </div>

                    <div>
                        <Row className="text-center justify-content-center">
                            <Col lg={6} md={6} sm={12}>
                                <img className="circleImg" src="https://media.istockphoto.com/photos/female-student-lost-in-thoughts-picture-id947115508?k=6&m=947115508&s=612x612&w=0&h=zn7eIHul9mkr_7QeNCcwocxMtV6WxieA_2F3VIzauBY=" />
                                <h1 className="serviceName">Web Development</h1>
                                <p className="serviceDescription">What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer</p>
                            </Col>
                        </Row>
                    </div>

                 </Slider>   
                    
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;