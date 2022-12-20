import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Modal, Row, Button } from 'react-bootstrap'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';

export class Video extends Component {

    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    modalClose = () => this.setState({
        show: false
    });
    modalOpen = () => this.setState({
        show: true
    });


    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">OUR VIDEOS</h1>
                    <div className="bottomLine"></div>
                    <Row>
                        <Col lg={6} md={6} sm={12} className="videoText">
                            <p className="serviceDescription text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint accusamus exercitationem, suscipit ea animi. Totam voluptatibus, saepe perspiciatis odio ipsam consequuntur temporibus consectetur itaque eum quam, voluptatum molestiae doloribus.<br></br><br></br>

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint accusamus exercitationem, suscipit ea animi. Totam voluptatibus, saepe perspiciatis odio ipsam consequuntur temporibus consectetur itaque eum quam, voluptatum molestiae doloribus.<br></br><br></br>

                                etur adipisicing elit. Nam sint accusamus exercitationem, suscipit ea animi. Totam voluptatibus, saepe perspiciatis odio ipsam consequuntur temporibus consectetur itaque eum quam, voluptatum molestiae doloribus.<br></br><br></br>
                            </p>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="videoCard">
                            <FontAwesomeIcon style={{
                                cursor: 'pointer'
                            }}
                                onClick={this.modalOpen} className="iconProject" icon={faVideoSlash} />

                        </Col>
                    </Row>
                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalCLose}>
                    <Modal.Body>
                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}

export default Video