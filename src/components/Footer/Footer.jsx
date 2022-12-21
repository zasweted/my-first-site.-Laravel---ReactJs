import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faEnvelope, faHouse, faLocationDot, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'

export class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-4 text-center">
                            <h2 className="footerName text-center">Follow Me</h2>
                            <div className="socialContainer">
                                <a className="facebook social" href="#"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                                <a className="linkedin social" href="#"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                                <a className="gitHub social" href="#"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                                <a className="discord social" href="#"><FontAwesomeIcon icon={faDiscord} size="2x" /></a>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-4 d-flex flex-column p-4 text-start">
                            <h2 className="footerName text-center">Address</h2>
                            <p className="footerDescription"><FontAwesomeIcon icon={faLocationDot} />Vilnius, Lithuania.</p>
                            <p className="footerDescription"><FontAwesomeIcon icon={faPhone} />Phone +370 000 0000</p>
                            <p className="footerDescription"><FontAwesomeIcon icon={faEnvelope} />Email : zaswet@gmail.com</p>
                             
                            
                            
                            
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-4 d-flex flex-column p-4 text-start">
                            <h2 className="footerName text-center">Information</h2>
                            <a className="footerLink" href="#">About Me</a>
                            <a className="footerLink" href="#">Profile</a>
                            <a className="footerLink" href="#">Contact Me</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-4 d-flex flex-column p-4 text-start">
                            <h2 className="footerName text-center">Policy</h2>
                            <a className="footerLink" href="#">Refund Policy Me</a>
                            <a className="footerLink" href="#">Privacy Policy</a>
                            <a className="footerLink" href="#">Terms and Conditions</a>
                        </Col>
                    </Row>
                </Container>
                <Container fluid="true" className="text-center copyRightSection">
                    <a className="copyRightLink" href="">&copy; 2022 All Rights Reserved.</a>
                </Container>
            </Fragment>
        )
    }
}

export default Footer