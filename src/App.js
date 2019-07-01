import React from 'react';
import './App.css';
import Liste from './Liste';

const tab = {
  tabMenu: ['Home', 'Services', 'Contact'],
  isActive: false,
};

function App() {
  return (
    <div className="App">
      <Liste tabItems={tab.tabMenu} isActive={tab.isActive}/>
    </div>
  );
}

export default App;