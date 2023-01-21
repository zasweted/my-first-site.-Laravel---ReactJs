import React, { Component, Fragment } from 'react'
import { Row, Container } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import RecentProjectsCard from './RecentProjectsCard';

class RecentProject extends Component {

    constructor() {
        super();
        this.state = {
            apiData: []
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectsHomePageData).then(result => {
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
                    <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
                    <div className="bottomLine"></div>
                    <Row>

                        <RecentProjectsCard data={data}></RecentProjectsCard>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default RecentProject