import React, { Component, Fragment } from 'react'
import AboutMe from '../components/AboutMe/AboutMe';
import Analysis from '../components/Analysis/Analysis';
import ClientReview from '../components/ClientReview/ClientReview';
import Courses from '../components/Courses/Courses';
import Footer from '../components/Footer/Footer';
import RecentProject from '../components/RecentProject/RecentProject';
import Services from '../components/Services/Services';
import Summary from '../components/Summary/Summary';
import TopBanner from '../components/TopBanner/TopBanner';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Video from '../components/Video/Video';
import Welcome from '../components/Welcome/Welcome';

export class HomePage extends Component {
    componentDidMount()
  {
    window.scroll(0,0)
  }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Easy Learning"></TopNavigation>
                <TopBanner></TopBanner>
                <Welcome></Welcome>
                <Services></Services>
                <Analysis></Analysis>
                <Summary></Summary>
                <RecentProject></RecentProject>
                <Courses></Courses>
                <Video></Video>
                <ClientReview></ClientReview>
                <AboutMe></AboutMe>
                <Footer></Footer>
            </Fragment>
        )
    }
}

export default HomePage