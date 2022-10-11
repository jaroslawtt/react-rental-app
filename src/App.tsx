import React from 'react';
import Header from "./components/Header";
import Apartments from "./components/Apartments";
import Rent from "./components/Rent";
import RentalForm from "./components/RentalForm";
import {useAppSelector} from "./hooks/redux-hooks";


function App() {
  const apartments = useAppSelector(state => state.apartments);
  return (
    <div className="App">
        <Header/>
        <RentalForm/>
        <Rent apartments={apartments}/>
        <Apartments/>
    </div>
  );
}

export default App;
