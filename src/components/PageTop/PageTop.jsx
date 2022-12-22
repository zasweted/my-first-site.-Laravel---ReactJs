import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'

export class PageTop extends Component {
    render() {
        return (
            <div>
                <Fragment>
                    <Container fluid={true} className="topFixedPage p-0">
                        <div className="topPageOverlay">
                            <Container className="topContentPage">
                                <Row>
                                    <Col className="text-center">
                                        
                                        <h4 className="topPageTitle">{this.props.pageTitle}</h4>
                                        
                                    </Col>
                                </Row>
                            </Container>

                        </div>
                    </Container>
                </Fragment>
            </div>
        )
    }
}

export default PageTop