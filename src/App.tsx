import React from 'react';
import Header from "./components/Header";
import Controls from "./components/Controls";
import Apartments from "./components/Apartments";


function App() {
  return (
    <div className="App">
        <Header>Apartments Marketplace</Header>
        <Apartments/>
    </div>
  );
}

export default App;
