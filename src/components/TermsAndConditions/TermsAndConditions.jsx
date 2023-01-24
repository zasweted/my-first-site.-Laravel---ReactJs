import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';

class TermsAndConditions extends Component {

    constructor() {
        super();
        this.state = {
            apiData: ""
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.InformationData).then(result => {
            this.setState({
                apiData: result[0]['terms_and_conditions']
            });
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="serviceName">Terms And Conditions</h1>
                            <hr />
                            <p className="serviceDescription">{this.state.apiData}</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default TermsAndConditions