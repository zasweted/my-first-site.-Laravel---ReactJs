import React, { Component, Fragment } from 'react'
import ContactSection from '../components/ContactsSection/ContactSection'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class ContactPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation></TopNavigation>
        <PageTop pageTitle="Contact Us"></PageTop>
        <ContactSection></ContactSection>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default ContactPage