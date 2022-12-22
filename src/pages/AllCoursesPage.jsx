import React, { Component, Fragment } from 'react'
import AllCourses from '../components/AllCourses/AllCourses'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class AllCoursesPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation></TopNavigation>
        <PageTop pageTitle="All Courses"></PageTop>
        <AllCourses></AllCourses>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default AllCoursesPage