import React from 'react'
import { Col } from 'react-bootstrap'

function ServicesCard({data})
{
    return(
        <>
            {
                data.map(data => {
                    return <Col key={data.id} lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img className="cardIcon" src={data.service_image} />
                            <h2 className="serviceName">{data.service_name}</h2>
                            <p className="serviceDescription">{data.service_description}</p>
                        </div>
                    </Col>
                })
            }
        </>
    )
}

export default ServicesCard