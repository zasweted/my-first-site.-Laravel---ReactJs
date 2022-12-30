import { faCheckSquare, faClipboard, faClock, faClone, faTags, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';

class CourseDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5 text-start">
          <Row>
            <Col lg={8} md={6} sm={12}>
              <h1 className="courseDetailsText">Lorem ipsum dolor sit amet consectetur.</h1>
              <img className="courseDetailsImage" src="https://solverwp.com/demo/html/edumint/assets/img/course/9.png" />
              <br />
              <p className="courseAllDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                Voluptas ab non fuga provident, officiis, mollitia placeat minima maxime a sed dicta maiores sequi numquam voluptate fugit corrupti beatae ducimus labore amet exercitationem quo. Velit, a illo.<br /> Voluptatibus cumque asperiores totam reprehenderit quaerat. Voluptatum, iste. Rem ex dolores perferendis nam quisquam!</p>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="widget-feature">
                <h4 className="widget-title text-center">Course Features</h4>
                <hr />
                <ul>
                  <li><FontAwesomeIcon icon={faUser}></FontAwesomeIcon><span>Enrolled :</span>1200 students</li>
                  <li><FontAwesomeIcon icon={faClock}></FontAwesomeIcon><span>Duration :</span>2 hours</li>
                  <li><FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon><span>Lectures :</span>8</li>
                  <li><FontAwesomeIcon icon={faClone}></FontAwesomeIcon><span>Categories :</span>Technology</li>
                  <li><FontAwesomeIcon icon={faTags}></FontAwesomeIcon><span>Tags :</span>Android, JavaScript</li>
                  <li><FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon><span> Instructor :</span>John Doe</li>
                </ul>
                <div className="price-wrap text-center">
                  <h5>Price: <span>$54.00</span></h5>
                  <Link to="#"><Button variant="warning">ENROLL COURSE</Button></Link>
                </div>


              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="course-feature">
                <h1 className="courseDetailsText text-center">Skill You Need</h1>
                <hr />
                <ul>
                  <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>Lorem ipsum dolor sit amet.</span></li>
                  <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>Lorem ipsum dolor sit amet.</span></li>
                  <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>Lorem ipsum dolor sit amet.</span></li>
                  <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>Lorem ipsum dolor sit amet.</span></li>
                  <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>Lorem ipsum dolor sit amet.</span></li>
                  <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>Lorem ipsum dolor sit amet.</span></li>
                </ul>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                <BigPlayButton position="center" />
              </Player>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default CourseDetails