import React from 'react';
import Header from "./components/Header";
import Apartments from "./components/Apartments";
import Rent from "./components/Rent";
import RentalForm from "./components/RentalForm";
import {useAppSelector} from "./hooks";


function App() {
  const apartments = useAppSelector(state => state.apartments.apartments);
  return (
    <div className="App">
        <Header/>
        <RentalForm/>
        <Rent apartments={apartments.filter(apartment => apartment.rented)}/>
        <Apartments apartments={apartments.filter(apartments => !apartments.rented)}/>
    </div>
  );
}

export default App;
