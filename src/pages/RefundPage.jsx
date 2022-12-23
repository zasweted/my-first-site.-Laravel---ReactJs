import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import RefundPolicy from '../components/RefundPolicy/RefundPolicy'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class RefundPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Refund Polic"y></TopNavigation>
        <PageTop pageTitle="Refund Policy"></PageTop>
        <RefundPolicy></RefundPolicy>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default RefundPage