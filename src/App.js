import React from 'react';
import AboutDescription from './components/AboutDescription/AboutDescription';
import ContactSection from './components/ContactsSection/ContactSection';
import PageTop from './components/PageTop/PageTop';
import TopNavigation from './components/TopNavigation/TopNavigation';
import AboutPage from './pages/AboutPage';
import AllCoursesPage from './pages/AllCoursesPage';
import AllServicesPage from './pages/AllServicesPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';


function App() {
  return (
    <>
      <div>
        <AllServicesPage></AllServicesPage>
      </div>
    </>
  );
}

export default App;
