import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../../asset/image/page1.png'
import img2 from '../../asset/image/page2.png'
import img3 from '../../asset/image/page3.png'
import img19 from '../../asset/image/19.png'
import img20 from '../../asset/image/20.png'
import img21 from '../../asset/image/21.png'

class Welcome extends Component {
    render() {
        return (
            <Fragment>
                <div className="introAreaTop">
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="section-title text-center">
                                    <div className="intro-area-inner">
                                        <h6 className="sub-title double-line">WELCOME</h6>
                                        <h2 className="main-title">An Exemplary</h2>
                                        <h2 className="main-title">Learning Community</h2>
                                        <Container className="mt-5 text-center">
                                            <Row>
                                                <Col lg={4} md={6} sm={12}>
                                                    <img src={img1} />
                                                    <h1 className="serviceName">Easy As It Gets</h1>
                                                    <p className="serviceDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, est?</p>
                                                </Col>
                                                <Col lg={4} md={6} sm={12}>
                                                    <img src={img2} />
                                                    <h1 className="serviceName">Teach The Way You Want</h1>
                                                    <p className="serviceDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, est?</p>
                                                </Col>
                                                <Col lg={4} md={6} sm={12}>
                                                    <img src={img3} />
                                                    <h1 className="serviceName">The Small Matter</h1>
                                                    <p className="serviceDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, est?</p>
                                                </Col>
                                            </Row>
                                            <Row className="intro-footer bg-base mt-5 text-center">
                                                <Col lg={4} md={6} sm={12}>
                                                    <Row>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <img className="sideImg" src={img19} />
                                                        </Col>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <h5 className="homeIntro text-start">Development</h5>
                                                            <p className="serviceDescription text-start">Lorem, ipsum dolor.</p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col lg={4} md={6} sm={12}>
                                                    <Row>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <img className="sideImg" src={img20} />
                                                        </Col>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <h5 className="homeIntro text-start">Web Design</h5>
                                                            <p className="serviceDescription text-start">Lorem, ipsum dolor.</p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col lg={4} md={6} sm={12}>
                                                    <Row>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <img className="sideImg" src={img21} />
                                                        </Col>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <h5 className="homeIntro text-start">E-commerce</h5>
                                                            <p className="serviceDescription text-start">Lorem, ipsum dolor.</p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}

export default Welcome