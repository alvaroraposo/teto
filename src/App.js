import React, { useState } from 'react';
import IframeComponent from './components/Iframe/Iframe';
import Skybot from './components/Skybot';

import './App.css';

function App() {
  const [site, setSite] = useState("https://www.techo.org/brasil/");

  const changeSite = (newSite) => {
    setSite(newSite);
  }

  return (
    <div>
      <IframeComponent src={site} />
      <Skybot changeSite={changeSite}/>
    </div>
  );
}

export default App;
