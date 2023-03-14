import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import { Link } from 'react-router-dom'
import AppUrl from '../../RestAPI/AppUrl';
import CoursesCard from '../Courses/CoursesCard';

class AllCourses extends Component {

    constructor()
    {
        super();
        this.state = {
            apiData: []
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CoursesHomePageDdata)
        .then(result => {
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
                    <h1 className="serviceMainTitle">MY COURSES</h1>
                    <div className="bottomLine"></div>
                    <Row>
                        <CoursesCard data={data}></CoursesCard>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default AllCourses
