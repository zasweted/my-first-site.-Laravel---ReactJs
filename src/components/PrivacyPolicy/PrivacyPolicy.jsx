import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class PrivacyPolicy extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="serviceName">Privacy Policy</h1>
                            <hr />
                            <p className="serviceDescription">
                                The Website uses Mediavine to manage all third-party advertising on the Website. Mediavine serves content and advertisements when you visit the Website, which may use first and third-party cookies. A cookie is a small text file which is sent to your computer or mobile device (referred to in this policy as a “device”) by the web server so that a website can remember some information about your browsing activity on the Website. The cookie may collect information relating to your use of the Website, information about your device such as the device’s IP address and browser type, demographic data and, if you arrived at the Website via a link from a third-party site, the URL of the linking page.

                                First party cookies are created by the website that you are visiting. A third-party cookie is frequently used in behavioral advertising and analytics and is created by a domain other than the website you are visiting. Third-party cookies, tags, pixels, beacons and other similar technologies (collectively, “Tags”) may be placed on the Website to monitor interaction with advertising content and to target and optimize advertising. Each internet browser has functionality so that you can block both first and third-party cookies and clear your browser’s cache. The “help” feature of the menu bar on most browsers will tell you how to stop accepting new cookies, how to receive notification of new cookies, how to disable existing cookies and how to clear your browser’s cache. For more information about cookies and how to disable them, you can consult the information at <a href="www.allaboutcookies.org/manage-cookies/"> www.allaboutcookies.org/manage-cookies/</a>.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default PrivacyPolicy