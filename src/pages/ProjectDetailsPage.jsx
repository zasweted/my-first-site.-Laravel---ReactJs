import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class ProjectDetailsPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Project Details"></TopNavigation>
        <PageTop pageTitle="Project Details"></PageTop>
        <ProjectDetails></ProjectDetails>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default ProjectDetailsPage