import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export class Analysis extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                {
                    Technology: 'PHP',
                    Projects: 100
                },
                {
                    Technology: 'MySql',
                    Projects: 90
                },
                {
                    Technology: 'Laravel',
                    Projects: 95
                },
                {
                    Technology: 'ReactJs',
                    Projects: 85
                },
                {
                    Technology: 'OpenCart',
                    Projects: 80
                },
                {
                    Technology: 'VueJs',
                    Projects: 70
                },
                {
                    Technology: 'Django',
                    Projects: 60
                },
                {
                    Technology: 'JavaScript',
                    Projects: 100
                }
            ]
        }
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
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology"></XAxis>
                                    <Tooltip></Tooltip>
                                    <Bar dataKey="Projects" fill={"#990000"}></Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className=' text-start  serviceDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint accusamus exercitationem, suscipit ea animi. Totam voluptatibus, saepe perspiciatis odio ipsam consequuntur temporibus consectetur itaque eum quam, voluptatum molestiae doloribus.
                                <br></br>
                                <br></br>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint accusamus exercitationem, suscipit ea animi. Totam voluptatibus, saepe perspiciatis odio ipsam consequuntur temporibus consectetur itaque eum quam, voluptatum molestiae doloribus.
                                <br></br>
                                <br></br>
                                etur adipisicing elit. Nam sint accusamus exercitationem, suscipit ea animi. Totam voluptatibus, saepe perspiciatis odio ipsam consequuntur temporibus consectetur itaque eum quam, voluptatum molestiae doloribus.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Analysis