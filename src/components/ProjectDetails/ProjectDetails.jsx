import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pdetails from '../../asset/image/pdetails.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12} >
                            <div >
                                <img src={pdetails} />
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="mt-5">
                            <div>
                                <h1 className="projectDetails">Education is continuing a proud tradition.</h1>
                                <p className="projectDetailsName">Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae earum delectus provident, quas laudantium hic reprehenderit dicta deserunt blanditiis explicabo ducimus quod soluta atque eius similique, architecto dolor maxime facilis dolorum? Maiores incidunt fuga delectus suscipit esse ipsam id.</p>

                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Lorem ipsum dolor sit amet. </p>
                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Lorem ipsum dolor sit amet consectetur. </p>
                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Lorem, ipsum dolor. </p>
                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Lorem ipsum dolor sit. </p>
                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />Lorem, ipsum dolor. </p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ProjectDetails