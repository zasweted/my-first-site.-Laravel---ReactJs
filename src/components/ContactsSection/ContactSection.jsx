import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class ContactSection extends Component {

    constructor()
    {
        super();
        this.state = {
            address: '',
            phone: '',
            email:''
        }
    }
    componentDidMount()
    {
        RestClient.GetRequest(AppUrl.FooterData)
        .then(result => {
            this.setState({
                address: result[0]['address'],
                phone: result[0]['phone'],
                email: result[0]['email']
            });
        })
    }
    sendContact()
    {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        let jsonData = {
            name: name,
            email: email,
            message: message
        }

        RestClient.PostRequest(AppUrl.ContactsStore, JSON.stringify(jsonData))
        .then(result => {
            alert(result);
        })
        .catch(error => {
            alert('error');
        });
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">


                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Quick connect</h1>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control id="name" type="text" placeholder="Enter Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control id="email" type="email" placeholder="Enter Your Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control id="message" as="textarea" rows={4} placeholder="Enter Your Message" />
                                </Form.Group>

                                
                                <Button onClick={this.sendContact}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Discuss Now</h1>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faLocationDot} /><a className="contact-me-link">{this.state.address}</a></p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faPhone} /><a className="contact-me-link" href={'tel:'+ this.state.phone}>{this.state.phone}</a></p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope} /><a className="contact-me-link" href={'mailto:'+ this.state.email}>{this.state.email}</a></p>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ContactSection