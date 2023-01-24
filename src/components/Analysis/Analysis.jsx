import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

export class Analysis extends Component {

    constructor() {
        super();
        this.state = {
            apiData: [],
            apiTechDescription: ""
        }
        
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.TechChartData).then(result => {
            this.setState({
                apiData: result
            });
        })
        RestClient.GetRequest(AppUrl.HomeTechDescription).then(result => {
            this.setState({
                apiTechDescription: result[0]['tech_description']
            });
        })
        
    }




    render() {
        

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
                    <div className="bottomLine"></div>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.apiData}>
                                    <XAxis dataKey="Technology"></XAxis>
                                    <Tooltip></Tooltip>
                                    <Bar dataKey="Projects" fill={"#990000"}></Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className=' text-start  serviceDescription'>{this.state.apiTechDescription}</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Analysis