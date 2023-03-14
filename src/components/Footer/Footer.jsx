import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faEnvelope, faHouse, faLocationDot, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl';

class Footer extends Component {

    constructor()
    {
        super();
        this.state = {
            address: "",
            email: "",
            phone: "",
            facebook: "",
            linkedin: "",
            discord: "",
            github: "",
            footer_credit: ""
        }
    }

    componentDidMount()
    {
        RestClient.GetRequest(AppUrl.FooterData).then(result => {
            this.setState({
                address: result[0]['address'],
                email: result[0]['email'],
                phone: result[0]['phone'],
                facebook: result[0]['facebook'],
                linkedin: 'https://www.linkedin.com/in/aleksandr-vasiljev-320210247/', // result[0]['facebook'] replace later.
                discord: result[0]['discord'],
                github: result[0]['github'],
                footer_credit: result[0]['footer_credit']

            })
        })
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-4 text-center">
                            <h2 className="footerName text-center">Follow Me</h2>
                            <div className="socialContainer">
                                <a className="facebook social" target="_blank" href={this.state.facebook}><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                                <a className="linkedin social" target="_blank" href={this.state.linkedin}><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                                <a className="gitHub social" target="_blank" href={this.state.github}><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                                <a className="discord social" target="_blank" href={this.state.discord}><FontAwesomeIcon icon={faDiscord} size="2x" /></a>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-4 d-flex flex-column p-4 text-start">
                            <h2 className="footerName">Address</h2>
                            <p className="footerDescription"><FontAwesomeIcon icon={faLocationDot} />{this.state.address}</p>
                            <p className="footerDescription"><FontAwesomeIcon icon={faPhone} /><a className="footerLink" href={'tel:'+ this.state.phone}>{this.state.phone}</a></p>
                            <p className="footerDescription"><FontAwesomeIcon icon={faEnvelope} /><a className="footerLink" href={'mailto:'+ this.state.email}>{this.state.email}</a></p>
                             
                            
                            
                            
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
                    <p className="copyRightLink">{this.state.footer_credit}</p>
                </Container>
            </Fragment>
        )
    }
}

export default Footer