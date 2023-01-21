import { Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RecentProjectsCard({data})
{
    return(
        <>
            {
                data.map(data => {
                    return <Col key={data.id} lg={4} md={6} sm={12}>
                        <Card className="projectCard">
                            <Card.Img variant="top" src={data.project_image_one} />
                            <Card.Body>
                                <Card.Title>
                                    <h1 className="serviceName">{data.project_name}</h1>
                                </Card.Title>
                                <Card.Text className="serviceDescription">
                                    {data.project_description}
                                </Card.Text>
                                <Button variant="primary"><Link className="link-style" to="/project-details">View More</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })
            }
        </>
    )
}

export default RecentProjectsCard