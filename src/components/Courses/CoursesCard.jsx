import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CoursesCard ({data}) {
    return(
      <>
          {
              data.map(data => {
                   return <Col key={data.id} lg={6} md={12} sm={12}>
                      <Row>
                          <Col className="p-2" lg={6} md={6} sm={12}>
                              <img className="courseImage" src={data.short_image} />
                          </Col>
      
                          <Col lg={6} md={6} sm={12}>
                              <h5 className="serviceName text-start">{data.short_title}</h5>
                              <p className="serviceDescription text-start">{data.short_description}</p>
                              <Link className="float-start courseViewMore" to="/course-details" >View Details</Link>
                          </Col>
                      </Row>
      
                  </Col>
              })
          }
      </>
    )
}


export default CoursesCard