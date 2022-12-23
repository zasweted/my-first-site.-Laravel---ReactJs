import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faEnvelope, faHouse, faLocationDot, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-4 text-center">
                            <h2 className="footerName text-center">Follow Me</h2>
                            <div className="socialContainer">
                                <a className="facebook social" target="_blank" href="https://www.facebook.com/aleksandr.vasiljev"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                                <a className="linkedin social" target="_blank" href="https://www.linkedin.com/in/aleksandr-vasiljev-320210247/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                                <a className="gitHub social" target="_blank" href="https://github.com/zasweted"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                                <a className="discord social" target="_blank" href="https://discordapp.com/users/Zaswet#6735"><FontAwesomeIcon icon={faDiscord} size="2x" /></a>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-4 d-flex flex-column p-4 text-start">
                            <h2 className="footerName">Address</h2>
                            <p className="footerDescription"><FontAwesomeIcon icon={faLocationDot} />Vilnius, Lithuania.</p>
                            <p className="footerDescription"><FontAwesomeIcon icon={faPhone} />Phone +370 000 0000</p>
                            <p className="footerDescription"><FontAwesomeIcon icon={faEnvelope} />Email : zaswet@gmail.com</p>
                             
                            
                            
                            
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-4 d-flex flex-column p-4 text-start">
                            <h2 className="footerName">Information</h2>
                            <Link className="footerLink" to="/about">About Me</Link>
                            <Link className="footerLink" to="/contact">Contact Me</Link>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-4 d-flex flex-column p-4 text-start">
                            <h2 className="footerName">Policy</h2>
                            <Link className="footerLink" to="/refund">Refund Policy</Link>
                            <Link className="footerLink" to="/terms">Terms And Conditions</Link>
                            <Link className="footerLink" to="/privacy">Privacy Policy</Link>
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