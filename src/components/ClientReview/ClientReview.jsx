import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

export class ClientReview extends Component {

    constructor() {
        super();
        this.state = {
            apiData: []
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ClientReviewData).then(result => {
            this.setState({
                apiData: result
            });
        })
    }

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
        const data = this.state.apiData;
        const card = data.map(data => {
            return <div key={data.id}>
                <Row className="text-center justify-content-center">
                    <Col  lg={6} md={6} sm={12}>
                        <img className="circleImage" src={data.client_image} />
                        <h2 className="serviceNameInvert">{data.client_title}</h2>
                        <p className="serviceDescriptionInvert">{data.client_description}</p>
                    </Col>
                </Row>
            </div>

        })
        return (


            <Fragment>
                <Container fluid={true} className="sliderBack text-center">
                    <h1 className="serviceMainTitleInvert p-4">TESTIMONIAL</h1>
                    <div className="bottomLineInvert"></div>

                    <Slider {...settings}>
                        {card}
                    </Slider>

                </Container>
            </Fragment>
        )
    }
}

export default ClientReview