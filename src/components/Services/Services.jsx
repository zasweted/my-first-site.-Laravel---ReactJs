import React, { Component, Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ServicesCard from './ServicesCard';

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
        


        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <div className="bottomLine"></div>

                    <Row>

                        <ServicesCard data={data}></ServicesCard>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Services