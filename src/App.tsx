import React from 'react';
import Header from "./components/Header";
import Apartments from "./components/Apartments";
import Rent from "./components/Rent";
import RentalForm from "./components/RentalForm";


function App() {
  return (
    <div className="App">
        <Header>Apartments Marketplace</Header>
        <RentalForm/>
        <Rent/>
        <Apartments/>
    </div>
  );
}

export default App;
