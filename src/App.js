import React from 'react';
import './App.css';
import Liste from './Liste';

const tab = ['Home', 'Services', 'Contact'];

function App() {
  return (
    <div className="App">
      <Liste tabItems={tab}/>
    </div>
  );
}

export default App;