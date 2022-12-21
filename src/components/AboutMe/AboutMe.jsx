import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../asset/image/face.png'
import { init } from 'ityped'

export class AboutMe extends Component {

    componentDidMount(){
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['Web Developer!'] })
      }

    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">ABOUT ME</h1>
                    <div className="bottomLine"></div>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="aboutImage">
                                <img className="aboutMeImage" src={face} alt="" />
                            </div>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <div className="aboutMeBody">
                                <h2 className="aboutMeDescription">Hi There, I`m</h2>
                                <h2 className="aboutMeTitle">Aleksandr</h2>
                                <h2 className="aboutMeDescription">Work as <span id="myElement"></span></h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default AboutMe