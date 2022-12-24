import React, { Component, Fragment } from 'react'
import { Row, Container, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class AllProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
                    <div className="bottomLine"></div>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg?w=740&t=st=1671555361~exp=1671555961~hmac=1f9e506c51c2294b4045592158daaa37102a3504dd57e0f6759734decade0995" />
                                <Card.Body>
                                    <Card.Title>
                                        <h1 className="serviceName">Project Name One</h1>
                                    </Card.Title>
                                    <Card.Text className="serviceDescription">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project-details">View More</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/students-studying-online_74855-5584.jpg?w=740&t=st=1671555625~exp=1671556225~hmac=4fb11181a80d719e87ba7dd6bb378c487e908619565598f6c36c35ce93ad6554" />
                                <Card.Body>
                                    <Card.Title >
                                        <h1 className="serviceName">Project Name Two</h1>
                                    </Card.Title>
                                    <Card.Text className="serviceDescription">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project-details">View More</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/students-watching-webinar-computer-studying-online_74855-15522.jpg?w=740&t=st=1671555644~exp=1671556244~hmac=eb550cebefb4f2c15fca4f28334a34b942a9f8934acfb7edcc8d51da39bedeaf" />
                                <Card.Body>
                                    <Card.Title >
                                        <h1 className="serviceName">Project Name Three</h1>

                                    </Card.Title>
                                    <Card.Text className="serviceDescription">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project-details">View More</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg?w=740&t=st=1671555361~exp=1671555961~hmac=1f9e506c51c2294b4045592158daaa37102a3504dd57e0f6759734decade0995" />
                                <Card.Body>
                                    <Card.Title>
                                        <h1 className="serviceName">Project Name One</h1>
                                    </Card.Title>
                                    <Card.Text className="serviceDescription">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project-details">View More</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/students-studying-online_74855-5584.jpg?w=740&t=st=1671555625~exp=1671556225~hmac=4fb11181a80d719e87ba7dd6bb378c487e908619565598f6c36c35ce93ad6554" />
                                <Card.Body>
                                    <Card.Title >
                                        <h1 className="serviceName">Project Name Two</h1>
                                    </Card.Title>
                                    <Card.Text className="serviceDescription">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project-details">View More</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/students-watching-webinar-computer-studying-online_74855-15522.jpg?w=740&t=st=1671555644~exp=1671556244~hmac=eb550cebefb4f2c15fca4f28334a34b942a9f8934acfb7edcc8d51da39bedeaf" />
                                <Card.Body>
                                    <Card.Title >
                                        <h1 className="serviceName">Project Name Three</h1>

                                    </Card.Title>
                                    <Card.Text className="serviceDescription">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project-details">View More</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default AllProjects