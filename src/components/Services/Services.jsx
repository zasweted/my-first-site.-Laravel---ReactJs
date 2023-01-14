import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designIcon from '../../asset/image/design.png';
import ecommerceIcon from '../../asset/image/ecommerce.png';
import webIcon from '../../asset/image/web.png';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class Services extends Component {

    constructor() {
        super();
        this.state = {
            apiData: []
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ServicesData).then(result => {
            this.setState({
                apiData: result
            });
        })
    }

    render() {

        const data = this.state.apiData;
        const card = data.map(data => {
            return <Col key={data.id} lg={4} md={6} sm={12}>
                <div className="serviceCard text-center">
                    <img className="cardIcon" src={data.service_image} />
                    <h2 className="serviceName">{data.service_name}</h2>
                    <p className="serviceDescription">{data.service_description}</p>
                </div>
            </Col>
        });
        

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <div className="bottomLine"></div>

                    <Row>

                        {card}

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Services