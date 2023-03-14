import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Modal, Row, Button } from 'react-bootstrap'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

export class Video extends Component {

    constructor() {
        super();
        this.state = {
            show: false,
            videoDescription:'',
            videoUrl:''
        }
    }

    componentDidMount()
    {
        RestClient.GetRequest(AppUrl.HomeVideoData)
        .then(result => {
            this.setState({
                videoDescription: result[0]['video_description'],
                videoUrl: result[0]['video_url']
            });
        })
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
                            <p className="serviceDescription" style={{ 
                                textAlign:'justify'
                             }}>
                                {this.state.videoDescription}
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
                        <Player src={this.state.videoUrl}>
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