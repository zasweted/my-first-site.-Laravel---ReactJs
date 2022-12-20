import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class ClientReview extends Component {
    render() {

        let settings = {
            arrows: false,
            autoPlaySpeed: 2000,
            autoPlay: true,
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
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
                <Container fluid={true} className="sliderBack text-center">
                    <h1 className="serviceMainTitleInvert p-4">TESTIMONIAL</h1>
                    <div className="bottomLineInvert"></div>

                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImage" src="https://img.freepik.com/free-photo/close-up-confident-male-employee-white-collar-shirt-smiling-camera-standing-self-assured-against-studio-background_1258-26761.jpg?w=740&t=st=1671562658~exp=1671563258~hmac=54cd09fc5c93f5705c1e6eedcac7c1f912da108febf2cfd9d30b877b132b7392" />
                                    <h2 className="serviceNameInvert">John Doe</h2>
                                    <p className="serviceDescriptionInvert">Qualified web design and attractive effects which catches visitor`s Eye.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImage" src="https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?w=740&t=st=1671564217~exp=1671564817~hmac=e60b856dffb17872eaa489775fe92c24e9afcb4796e3ade92dfc705f335f8dd6" />
                                    <h2 className="serviceNameInvert">John Doe</h2>
                                    <p className="serviceDescriptionInvert">Qualified web design and attractive effects which catches visitor`s Eye.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImage" src="https://img.freepik.com/premium-photo/caucasian-handsome-man-posing-with-arms-hip-smiling-isolated-purple-wall_1368-89876.jpg?w=900" />
                                    <h2 className="serviceNameInvert">John Doe</h2>
                                    <p className="serviceDescriptionInvert">Qualified web design and attractive effects which catches visitor`s Eye.</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>

                </Container>
            </Fragment>
        )
    }
}

export default ClientReview