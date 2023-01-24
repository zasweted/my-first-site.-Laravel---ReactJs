import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';

class AboutDescription extends Component {

    constructor() {
        super();
        this.state = {
            apiData: ""
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.InformationData).then(result => {
            this.setState({
                apiData: result[0]['about']
            });
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="serviceName">Who I A`m</h1>
                            <hr />
                            <p className="serviceDescription">{this.state.apiData}</p>
                            <h1 className="serviceName">What I Do</h1>
                            <hr />
                            <p className="serviceDescription">{this.state.apiData}</p>
                            <h1 className="serviceName">My Goals</h1>
                            <hr />
                            <p className="serviceDescription">{this.state.apiData}</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default AboutDescription