import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

class ContactSection extends Component {
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
                                    <Form.Control type="text" placeholder="Enter Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Your Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Enter Your Message" />
                                </Form.Group>

                                
                                <Button type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Discuss Now</h1>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faLocationDot} />Vilnius, Lithuania.</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faPhone} />Phone +370 000 0000</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope} />Email : zaswet@gmail.com</p>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ContactSection