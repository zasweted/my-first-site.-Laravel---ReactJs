import React from 'react';
import Analysis from './components/Analysis/Analysis';
import Services from './components/Services/Services';
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
      </div>
    </>
  );
}

export default App;
