import React from 'react';
import Caption from "./Caption";
import "../styles/Rent.css"
import RentCard from "./RentCard";

const Rent = () => {
    return (
        <div className= "rent-block">
            <Caption>🤩 Your current rent</Caption>
            <RentCard/>
        </div>
    );
};

export default Rent;