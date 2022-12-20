import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY COURSES</h1>
                    <div className="bottomLine"></div>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col className="p-2" lg={6} md={6} sm={12}>
                                    <img className="courseImage" src="https://img.freepik.com/free-photo/discussing-video-course_1098-13061.jpg?w=740&t=st=1671557284~exp=1671557884~hmac=2f929894b1b11f9c315412db2159c06bb7e078585fdfaf15c677184677d91185" />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="serviceName text-start">Laravel 8</h5>
                                    <p className="serviceDescription text-start">Laravel 8 - Build Advance Ecommerce Project A-Z</p>
                                    <a className="float-start courseViewMore" href="#" >View Details</a>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="p-2" lg={6} md={6} sm={12}>
                                    <img className="courseImage" src="https://img.freepik.com/free-photo/female-african-american-speaker-giving-presentation-hall-university-workshop_155003-3579.jpg?w=740&t=st=1671558164~exp=1671558764~hmac=7a8c8cfd6592584fb6427a9bcbe5193f4b83f1603ceaa343f4192af28a8882b9" />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="serviceName text-start">Laravel 8</h5>
                                    <p className="serviceDescription text-start">Laravel 8 - Build Advance Ecommerce Project A-Z</p>
                                    <a className="float-start courseViewMore" href="#" >View Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                        <Row>
                                <Col className="p-2" lg={6} md={6} sm={12}>
                                    <img className="courseImage" src="https://img.freepik.com/free-photo/seminar-employees_1098-13304.jpg?w=740&t=st=1671558187~exp=1671558787~hmac=10bc7f1f9cb20058f6af5618eb5d8361ab837a2183f20ac58d0f4a648cfc56a3" />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="serviceName text-start">Laravel 8</h5>
                                    <p className="serviceDescription text-start">Laravel 8 - Build Advance Ecommerce Project A-Z</p>
                                    <a className="float-start courseViewMore" href="#" >View Details</a>
                                </Col>
                            </Row>
                        <Row>
                                <Col className="p-2" lg={6} md={6} sm={12}>
                                    <img className="courseImage" src="https://img.freepik.com/free-photo/students-seminar_1098-16066.jpg?w=740&t=st=1671558211~exp=1671558811~hmac=02a3accb292550d9e744ac625218ecf984739f5be250386deab18adac288f3a2" />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="serviceName text-start">Laravel 8</h5>
                                    <p className="serviceDescription text-start">Laravel 8 - Build Advance Ecommerce Project A-Z</p>
                                    <a className="float-start courseViewMore" href="#" >View Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Courses