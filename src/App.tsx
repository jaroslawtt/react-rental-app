import React from 'react';
import Header from "./components/Header";
import Apartments from "./components/Apartments";
import Rent from "./components/Rent";
import RentalForm from "./components/RentalForm";
import { apartments } from "./api";

const store = [...apartments];

function App() {
  return (
    <div className="App">
        <Header/>
        <RentalForm/>
        <Rent apartments={store}/>
        <Apartments/>
    </div>
  );
}

export default App;
