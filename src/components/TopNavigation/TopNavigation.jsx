import React, { Component, Fragment } from 'react'
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import whiteLogo from '../../asset/image/logo_white.png'
import blackLogo from '../../asset/image/logo_black.png'
import { NavLink } from 'react-router-dom';

export class TopNavigation extends Component {

    constructor(props) {
        super();
        this.state = {
            navBarTitle: "navTitle",
            navBarLogo: [whiteLogo], //obj
            navBarBack: "navBackground",
            navBarItem: "navItem",
            navVariant: 'dark',
            pageTitle: props.title
        }
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                navBarTitle: 'navTitleScroll',
                navBarLogo: [blackLogo],
                navBarBack: 'navBackgroundScroll',
                navBarItem: 'navItemScroll',
                navVariant: 'light'
            })
        }
        else if (window.scrollY < 100) {
            this.setState({
                navBarTitle: 'navTitle',
                navBarLogo: [whiteLogo],
                navBarBack: 'navBackground',
                navBarItem: 'navItem',
                navVariant: 'dark'
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }



    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar className={this.state.navBarBack} collapseOnSelect fixed="top" expand="lg" variant={this.state.navVariant}>
                    <Navbar.Brand className={this.state.navBarTitle} ><NavLink to="/"><img src={this.state.navBarLogo} /></NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav style={{
                            marginRight: '20px',
                            gap:'20px'
                        }}>
                            <NavLink exact activeStyle={{ color: '#ffd900' }} className={this.state.navBarItem} to="/">HOME</NavLink>
                            <NavLink exact activeStyle={{ color: '#ffd900' }} className={this.state.navBarItem} to="/about">ABOUT</NavLink>
                            <NavLink exact activeStyle={{ color: '#ffd900' }} className={this.state.navBarItem} to="/service">SERVICE</NavLink>
                            <NavLink exact activeStyle={{ color: '#ffd900' }} className={this.state.navBarItem} to="/course">COURSES</NavLink>
                            <NavLink exact activeStyle={{ color: '#ffd900' }} className={this.state.navBarItem} to="/portfolio">PORTFOLIO</NavLink>
                            <NavLink exact activeStyle={{ color: '#ffd900' }} className={this.state.navBarItem} to="/contact">CONTACT US</NavLink>






                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation