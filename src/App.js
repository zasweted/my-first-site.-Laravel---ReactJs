import React from 'react';
import Analysis from './components/Analysis/Analysis';
import RecentProject from './components/RecentProject/RecentProject';
import Services from './components/Services/Services';
import Summary from './components/Summary/Summary';
import TopBanner from './components/TopBanner/TopBanner';
import TopNavigation from './components/TopNavigation/TopNavigation';

function App() {
  return (
    <>
      <div>
        <TopNavigation></TopNavigation>
        <TopBanner></TopBanner>
        <Services></Services>
        <Analysis></Analysis>
        <Summary></Summary>
        <RecentProject></RecentProject>
      </div>
    </>
  );
}

export default App;
